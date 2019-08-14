import { object, string } from 'yup';

export default object().shape({
  email: string()
    .email('Invalid email')
    .required('Email is required'),
  password: string()
    .required('Password is required')
    .min(6, 'Password must be greater than 6 characters')
});
