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
