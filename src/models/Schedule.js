export const INITIAL_SCHEDULE_STRUCTURE = {
  Date: '2018-09-06T20:20:00',
  DateTime: '2018-09-06T20:20:00',
  Day: '2018-09-06T00:00:00',
  Season: 2018,
  SeasonType: 1,
  Week: 1,
  Status: 'Final'
};

export function transformFromAPI(apiResponse) {
  const {
    Date: date,
    DateTime: dateTime,
    Day: day,
    Season: season,
    SeasonType: seasonType,
    Week: week,
    Status: status
  } = apiResponse;
  return {
    date,
    dateTime,
    day,
    season,
    seasonType,
    week,
    status
  };
}
