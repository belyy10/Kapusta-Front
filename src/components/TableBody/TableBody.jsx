import { BsTrash } from 'react-icons/bs';
import { DeleteBtn, TableBodyItem, TableBodyList } from './TableBody.styled';

export default function TableBody({ transaction }) {
  return (
    <TableBodyList>
      <TableBodyItem>{transaction.date}</TableBodyItem>
      <TableBodyItem>{transaction.description}</TableBodyItem>
      <TableBodyItem>{transaction.category}</TableBodyItem>
      <TableBodyItem>{transaction.sum} UAH.</TableBodyItem>
      <TableBodyItem>
        <DeleteBtn>
          <BsTrash />
        </DeleteBtn>
      </TableBodyItem>
    </TableBodyList>
  );
}
