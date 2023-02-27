
import { useState } from 'react';
import { SummaryBox, SummaryTitle, SummaryBody } from './Summary.styled';

import SummaryBodyList from './SummaryList';


const monthSummary = [

    {
        "_id": "2023-02",
        "expenses": 2860
    },
    {
        "_id": "2023-01",
        "expenses": 370
    },
     {
        "_id": "2022-12",
        "expenses": 312
    }
]

export default function Summary() {
    // const [monthSummary, setMonthSummary] = useState('');

    return (
        <SummaryBox>
            <SummaryTitle>Summary</SummaryTitle>

            <SummaryBody>
                {monthSummary && monthSummary.map(item => <SummaryBodyList key={item.id}
                    item={item} />)}
 
            </SummaryBody>
        </SummaryBox>
    )
}

// import TableBody from 'components/TableBody';
// import {
//   TableBox,
//   TableTitle,
//   TableTitleItem,
//   TransactionBox,
//   TableBodys,
// } from './Table.styled';

// // export default function Table() {
//   return (
//     <TransactionBox>
//       <TableBox>
//         <thead>
//           <TableTitle>
//             <TableTitleItem>DATE</TableTitleItem>
//             <TableTitleItem>DESCRIPTION</TableTitleItem>
//             <TableTitleItem>category</TableTitleItem>
//             <TableTitleItem>sum</TableTitleItem>
//             <TableTitleItem></TableTitleItem>
//           </TableTitle>
//         </thead>
//         <TableBodys>
//           {monthTransaction &&
//             monthTransaction.map(transaction => (
//               <TableBody key={transaction.id} transaction={transaction} />
//             ))}
//         </TableBodys>
//       </TableBox>
//     </TransactionBox>
//   );
// }

