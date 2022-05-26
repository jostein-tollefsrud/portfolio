import * as yup from 'yup';

export const basicSchema = yup.object().shape({
  name: yup
    .string()
    .max(40, 'Must be lesser than 40 characters!')
    .required('Required!'),
  email: yup
    .string()
    .email('Please enter a valid email!')
    .required('Required!'),
  message: yup.string().min(5, 'Minimum 5 characters!').required('Required!'),
});
