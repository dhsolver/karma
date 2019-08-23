import { object, string } from 'yup';

export default object().shape({
  betType: string().required('Email is required'),
  betAmount: string().required('Password is required')
});
