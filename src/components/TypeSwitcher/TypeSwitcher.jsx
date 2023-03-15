import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getType } from '../../redux/transactions/transactionsSelectors.js';
import { changeType } from '../../redux/transactions/transactionsOperations.js';
import Switcher from '../Switcher';
import { Wraper } from './TypeSwitcher.styled.jsx';

export default function TypeSwitcher({ setCategory }) {
  const dispatch = useDispatch();
  const type = useSelector(getType);
  useEffect(() => {
    dispatch(changeType('expenses'));
  });

  const changeTypeToggle = () => {
    type === 'expenses'
      ? dispatch(changeType('income'))
      : dispatch(changeType('expenses'));
    setCategory('all');
  };

  return (
    <Wraper>
      <Switcher
        onLeftClick={changeTypeToggle}
        onRightClick={changeTypeToggle}
        text={type === 'expenses' ? 'Expenses' : 'Income'}
      />
    </Wraper>
  );
}
