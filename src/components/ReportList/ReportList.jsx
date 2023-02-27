// import {
//   useSelector,
//   // useDispatch
// } from 'react-redux';

// import {
//   // getIsLoading,
//   getReportsData,
// } from '../../redux/transactions/transactionsSelectors.js';
// // import { selectFilterValue } from 'redux/filterSlice.js';
// // import {
// //   ReportListItems,
// //   ReportListItem,
// //   ReportListBtn,
// // } from './ReportList.styled.js';

// import { SiJusteat } from 'react-icons/si';
// import { BiDrink } from 'react-icons/bi';
// import { BiJoystick } from 'react-icons/bi';
// import { GiHealing } from 'react-icons/gi';
// import { MdEmojiTransportation } from 'react-icons/md';
// import { GiFamilyHouse } from 'react-icons/gi';
// import { BsTools } from 'react-icons/bs';
// import { BsClipboardCheck } from 'react-icons/bs';
// import { MdSportsHandball } from 'react-icons/md';
// import { BsBookHalf } from 'react-icons/bs';
// import { MdDevicesOther } from 'react-icons/md';
// import { FiMeh } from 'react-icons/fi';

// export default function ReportsList () {
//   const reports = useSelector(getReportsData);
//   console.log(reports);
//   // const isLoading = useSelector(getIsLoading);
//   //   const dispatch = useDispatch();

//   // const filteredReports = reports.filter(report => report.includes(filter));

//   function getCategory(category) {
//     switch (category) {
//       case 'protucts':
//         <SiJusteat size={56} />;
//         break;
//       case 'alcohol':
//         <BiDrink size={56} />;
//         break;
//       case 'entertainment':
//         <BiJoystick size={56} />;
//         break;
//       case 'health':
//         <GiHealing size={56} />;
//         break;
//       case 'transport':
//         <MdEmojiTransportation size={56} />;
//         break;
//       case 'housing':
//         <GiFamilyHouse size={56} />;
//         break;
//       case 'technique':
//         <BsTools size={56} />;
//         break;
//       case 'communal, communication':
//         <BsClipboardCheck size={56} />;
//         break;
//       case 'sports, hobbies':
//         <MdSportsHandball size={56} />;
//         break;
//       case 'education':
//         <BsBookHalf size={56} />;
//         break;
//       case 'other':
//         <MdDevicesOther size={56} />;
//         break;
//       default:
//         <FiMeh size={56} />;
//     }
//   }

//   return (
//     <>
//       {/* {isLoading && <Loader />} */}
//       {/* {reports?.length > 0 ? (
//         <>
//           <ReportListItems>
//             {filteredReports.map(({ category, sum }) => (
//               <ReportListItem key={category}>
//                 <p>{sum}</p>
//                 <ReportListBtn type="button" onClick={() => dispatch()}>
//                   {getCategory(category)}
//                 </ReportListBtn>
//                 <p>{category}</p>
//               </ReportListItem>
//             ))}
//           </ReportListItems>
//         </>
//       ) : (
//         <p>No reports</p>
//       )} */}
//     </>
//   );
// };
