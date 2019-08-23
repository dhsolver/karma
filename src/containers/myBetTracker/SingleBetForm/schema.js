import { object, string } from 'yup';

export default object().shape({
  betType: string().required('Bet Type is required'),
  betAmount: string().required('Bet Amount is required')
});
