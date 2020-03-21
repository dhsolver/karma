import { getIconFromWeather } from '@utils/icon';
export const INITIAL_WEATHER_STRUCTURE = {
  forecastDescription: 'Broken Clouds',
  forecastTempHigh: 75,
  forecastTempLow: 73,
  forecastWindChill: 75,
  forecastWindSpeed: 5
};

export function transformFromAPI(apiResponse) {
  const {
    ForecastDescription: forecastDescription,
    ForecastTempHigh: forecastTempHigh,
    ForecastTempLow: forecastTempLow,
    ForecastWindChill: forecastWindChill,
    ForecastWindSpee: forecastWindSpeed
  } = apiResponse;

  return {
    forecastDescription,
    forecastTempHigh,
    forecastTempLow,
    forecastWindChill,
    forecastWindSpeed,
    forcastIcon: getIconFromWeather(forecastDescription)
  };
}

// TODO: udpate fractor value calculation
export function getWeatherFractorValue(weather) {
  const { icon } = weather;
  return icon ? weather : undefined;
}
