import GraphicBar from 'components/GraphicBar';
import { GraphicBox, GraphicMobileBox } from './Graphic.styled';
import { useMedia } from 'hooks/useMedia';
import GraphicMobileBar from 'components/GraphicMobileBar';
import { useEffect, useState } from 'react';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';
import { useSelector } from 'react-redux';

export default function Graphic({ category, transactions }) {
  const { isTabletAndDesktop, isMobile } = useMedia();
  const transactionsRedux = useSelector(selectTransactions);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filter = transactionsRedux.filter(
      transaction =>
        transaction.type.toLowerCase() === transactions.toLowerCase() &&
        transaction.category.toLowerCase() === category.toLowerCase()
    );

    const graphicTransact = filter.reduce((prev, { description, sum }) => {
      const index = prev.findIndex(option => option.name === description);

      const cost = transactions === 'Expenses' ? sum * -1 : sum;

      if (index !== -1) {
        prev[index].sum += cost;
        return prev;
      }

      prev.push({
        name: description,
        sum: cost,
      });
      return prev;
    }, []);

    const sortGriphicTransact = graphicTransact.sort(
      (firstEl, secondEl) => secondEl.sum - firstEl.sum
    );

    setFiltered(sortGriphicTransact);
  }, [category, transactions, transactionsRedux]);

  return (
    <>
      {isTabletAndDesktop && (
        <GraphicBox>
          <GraphicBar transaction={filtered} />
        </GraphicBox>
      )}
      {isMobile && (
        <GraphicMobileBox>
          <GraphicMobileBar transaction={filtered} />
        </GraphicMobileBox>
      )}
    </>
  );
}
