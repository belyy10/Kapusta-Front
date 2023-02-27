import * as yup from 'yup';

const schemaTransactions = yup.object().shape({
  date: yup.date(),
  description: yup.string().required('This is a required field'),
  category: yup.string().required('Please select a category'),
  sum: yup.number().positive().required('Please enter the amount'),
});

export default schemaTransactions;
