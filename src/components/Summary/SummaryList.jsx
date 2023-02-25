import { SummaryList, SummaryItem } from './Summary.styled';
let nameMon;

export default function SummaryBodyList({ item }) {
    const numMonth = item._id.slice(item._id.length - 2);
    // console.log(nm);
    switch ( numMonth ) {
        case '01': nameMon = 'January';
            break;
        case '02': nameMon = 'February';
            break;
        case '03': nameMon = 'March';
            break;
        case '04': nameMon = 'April';
            break;
        case '05': nameMon = 'May';
            break;
        case '06': nameMon = 'June';
            break;
        case '07': nameMon = 'July';
            break;
        case '08': nameMon = 'August';
            break;
        case '09': nameMon = 'september';
            break;
        case '10': nameMon = 'october';
            break;
        case '11': nameMon = 'november';
            break;
        case '12': nameMon = 'december';
            break;
        default: nameMon = 'Month';
            
    }
    console.log('nameMon', nameMon);
    return (
        <SummaryList>
            <SummaryItem>
                {nameMon} </SummaryItem>
            <SummaryItem> {item.expenses} </SummaryItem>
        </SummaryList>
    
    );
}