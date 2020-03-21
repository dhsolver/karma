import {
  transformFromAPI as transformWeather,
  getWeatherFractorValue
} from './Weather';
import { transformFromAPI as transformStadium } from './Stadium';
import { transformFromAPI as transformKarma } from './Karma';
import { transformFromAPI as transformSchedule } from './Schedule';
import { transformFromAPI as transformScore } from './Score';
import { transformFromAPI as transformOdd } from './Odd';

export const INITIAL_GAME_STRUCTURE = {
  id: '',
  fractors: {},
  progOdd: {},
  liveOdd: {},
  stadium: {},
  weather: {},
  score: {}
};

//TODO: needs to update this function

export function transformFromAPI(apiResponse) {
  const {
    HomeTeam: homeTeamInfoResponse,
    AwayTeam: awayTeamInfoResponse,
    Weather: weatherResponse,
    Karma: karmaResponse,
    Schedule: scheduleResponse,
    Score: scoreResponse,
    PregameOdds: oddResponse,
    LiveOdds: liveResponse
  } = apiResponse;
  const { StadiumDetails: stadiumResponse } = scheduleResponse;

  const weather = transformWeather(weatherResponse);
  const schedule = transformSchedule(scheduleResponse);
  const stadium = transformStadium(stadiumResponse);
  const karma = transformKarma(karmaResponse);
  const score = transformScore(scoreResponse, schedule);
  let liveOdd = transformOdd(liveResponse);
  const progOdd = transformOdd(oddResponse);

  if (!liveOdd.id) {
    liveOdd = { ...progOdd };
  }

  return {
    id: score.gameId,
    teamInfo: {
      homeTeam: {
        id: homeTeamInfoResponse.TeamID,
        key: homeTeamInfoResponse.Key,
        name: homeTeamInfoResponse.Name,
        logo: homeTeamInfoResponse.WikipediaLogoUrl
      },
      awayTeam: {
        id: awayTeamInfoResponse.TeamID,
        key: awayTeamInfoResponse.Key,
        name: awayTeamInfoResponse.Name,
        logo: awayTeamInfoResponse.WikipediaLogoUrl
      }
    },
    karma,
    stadium,
    weather,
    liveOdd,
    progOdd,
    fractors: {
      weather: getWeatherFractorValue(weather)
    },
    score
  };
}
