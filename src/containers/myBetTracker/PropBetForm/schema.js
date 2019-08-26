import { object, string, number, date } from 'yup';

export default object().shape({
  betAmount: number().required('Bet Amount is required'),
  sport: number().required('Sport is required'),
  date: date().required('Date is required').default(function() {
    return new Date();
  }),
  matchup: number().required('Matchup is required'),
  team: number().required('Team is required'),
  stat: number().required('Stat is required'),
  numberType: number().required('Number Type is required'),
  number: number().required('Number is required'),
  odds: number().required('Odds is required')
});
