import { object, string, number, date, lazy } from 'yup';

const fieldRequiredForMoneyLine = requiredText => ({
  is: 1,
  then: number().required(requiredText)
});

const fieldRequiredForSpread = requiredText => ({
  is: 2,
  then: number().required(requiredText)
});

const fieldRequiredForOverUnder = requiredText => ({
  is: 3,
  then: number().required(requiredText)
});

const schemas = object().shape({
    betType: number().required('Bet Type is required'),
    betAmount: number().required('Bet Amount is required'),
    sport: number().required('Sport is required'),
    date: date().required('Date is required').default(function() {
      return new Date();
    }),
    teamOne: number().nullable().notRequired()
      .when('betType', fieldRequiredForMoneyLine('Team 1 is required'))
      .when('betType', fieldRequiredForSpread('Team 1 is required')),
    teamTwo: number().nullable().notRequired()
      .when('betType', fieldRequiredForMoneyLine('Team 2 is required'))
      .when('betType', fieldRequiredForSpread('Team 2 is required')),
    matchup: number().nullable().notRequired()
      .when('betType', fieldRequiredForOverUnder('Matchup is required')),
    overUnderFlag: number().nullable().notRequired()
      .when('betType', fieldRequiredForOverUnder('Over Under Flag is required')),
    overUnderNumber: number().nullable().notRequired()
      .when('betType', fieldRequiredForOverUnder('Over Under Number is required')),
    spread: number().nullable().notRequired()
      .when('betType', fieldRequiredForSpread('Spread is required')),
    odds: number().nullable().notRequired()
      .when('betType', fieldRequiredForMoneyLine('Odds is required'))
      .when('betType', fieldRequiredForOverUnder('Odds is required'))
});
  
export default schemas;
