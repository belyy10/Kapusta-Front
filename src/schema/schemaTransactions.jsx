import * as yup from 'yup';

const schemaTransactions = yup.object().shape({
  date: yup.date(),
  description: yup.string().required('This is a required field'),
  category: yup.string().required('Please select a category'),
  sum: yup
    .number()
    .positive('Please enter the sum')
    .required('Please enter the sum'),
});

export default schemaTransactions;
