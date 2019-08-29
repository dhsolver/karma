const TEAM_TYPE = {
  AWAY: 'away',
  HOME: 'home'
};

export const INITIAL_TEAM_INFO = {
  type: TEAM_TYPE.HOME
};

export const EX_STADIUM_DETAILS = {
  Capacity: 68532,
  City: 'Philadelphia',
  Country: 'USA',
  GeoLat: 39.900771,
  GeoLong: -75.167469,
  Name: 'Lincoln Financial Field',
  PlayingSurface: 'Grass',
  StadiumID: 18,
  State: 'PA',
  Type: 'Outdoor'
};

export const INITIAL_STRUCTURE = {
  Canceled: false,
  Channel: null,
  GeoLat: null,
  GeoLong: null,
  ScoreID: 16654
};

export function transformFromAPI(apiResponse) {
  const {
    ForecastDescription: forecastDescription,
    ForecastTempHigh: forecastTempHigh,
    ForecastTempLow: forecastTempLow,
    ForecastWindChill: forecastWindChill,
    ForecastWindSpeed: forecastWindSpeed,
    Date: date,
    DateTime: dateTime,
    Day: day,
    HomeTeam: homeTeam,
    AwayTeam: awayTeam,
    HomeTeamMoneyLine: homeTeamMoneyLine,
    AwayTeamMoneyLine: awayTeamMoneyLine,
    GameKey: id,
    GlobalGameID: globalGameID,
    StadiumDetails: stadium,
    Status: status,
    Week: week,
    Season: season,
    SeasonType: seasonType,
    GlobalHomeTeamID: globalHomeTeamID,
    GlobalAwayTeamID: globalAwayTeamID,
    OverUnder: ou,
    PointSpread: spread
  } = apiResponse;
  return {
    id,
    key: id,
    globalGameID,
    stadium,
    status,
    ou,
    spread,
    season: {
      year: season,
      seasonType,
      week
    },
    fractors: {
      weather: {
        icon: forecastDescription.includes('Rain') ? 'weather' : '',
        forecastDescription,
        forecastTempHigh,
        forecastTempLow,
        forecastWindChill,
        forecastWindSpeed
      }
    },
    dateInfo: {
      date,
      dateTime,
      day
    },
    gameInfo: {
      homeTeam: {
        id: globalHomeTeamID,
        name: homeTeam
      },
      awayTeam: {
        id: globalAwayTeamID,
        name: awayTeam
      }
    },
    live: {
      homeTeam: '-7.5  (-115)',
      awayTeam: '+7.5  (-105)'
    },
    open: {
      homeTeam: homeTeamMoneyLine,
      awayTeam: awayTeamMoneyLine
    },
    moneyLine: {
      homeTeam: homeTeamMoneyLine,
      awayTeam: awayTeamMoneyLine
    },
    karmaPick: {
      homeTeam: ' ',
      awayTeam: 'ne +7.5'
    },
    karmaSim: {
      homeTeam: ' ',
      awayTeam: 'NE +6.5, 54%'
    }
  };
}
