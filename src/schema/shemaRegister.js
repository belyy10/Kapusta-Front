import * as yup from 'yup';

const schemaRegister = yup.object().shape({
  email: yup.string().required('This is a required field'),
  password: yup
    .string()
    .required('This is a required field')
    .min(6, 'min 6 symbols'),
});

export default schemaRegister;
