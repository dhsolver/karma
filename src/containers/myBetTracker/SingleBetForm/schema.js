import { object, number, date, string, mixed } from 'yup';
import { BET_TYPE } from '@appConfig';

const getDataTypeFunc = (datatype, requiredText) => {
  switch (datatype) {
    case 'number':
      return number().required(requiredText);
    case 'string':
      return string().required(requiredText);
    default:
      return mixed().required(requiredText);
  }
};

const fieldRequiredForMoneyLine = (requiredText, datatype) => {
  return {
    is: BET_TYPE['ml'],
    then: getDataTypeFunc(datatype, requiredText)
  };
};

const fieldRequiredForSpread = (requiredText, datatype) => ({
  is: BET_TYPE['sd'],
  then: getDataTypeFunc(datatype, requiredText)
});

const fieldRequiredForOverUnder = (requiredText, datatype) => ({
  is: BET_TYPE['ou'],
  then: getDataTypeFunc(datatype, requiredText)
});

const schemas = object().shape({
  betType: string().required('Bet Type is required'),
  betAmount: number().required('Bet Amount is required'),
  sport: string().required('Sport is required'),
  date: date()
    .required('Date is required')
    .default(function() {
      return new Date();
    }),
  teamOne: string()
    .nullable()
    .notRequired()
    .when('betType', fieldRequiredForMoneyLine('Team 1 is required', 'string'))
    .when('betType', fieldRequiredForSpread('Team 1 is required', 'string')),
  teamTwo: string()
    .nullable()
    .notRequired()
    .when('betType', fieldRequiredForMoneyLine('Team 2 is required', 'string'))
    .when('betType', fieldRequiredForSpread('Team 2 is required', 'string')),
  matchup: string()
    .nullable()
    .notRequired()
    .when(
      'betType',
      fieldRequiredForOverUnder('Matchup is required', 'string')
    ),
  overUnderFlag: string()
    .nullable()
    .notRequired()
    .when(
      'betType',
      fieldRequiredForOverUnder('Over Under Flag is required', 'string')
    ),
  overUnderNumber: number()
    .nullable()
    .notRequired()
    .when(
      'betType',
      fieldRequiredForOverUnder('Over Under Number is required', 'number')
    ),
  spread: number()
    .nullable()
    .notRequired()
    .when('betType', fieldRequiredForSpread('Spread is required', 'number')),
  odds: number()
    .nullable()
    .notRequired()
    .when('betType', fieldRequiredForMoneyLine('Odds is required', 'number'))
    .when('betType', fieldRequiredForOverUnder('Odds is required', 'number'))
});

export default schemas;
