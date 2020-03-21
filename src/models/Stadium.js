export const INITIAL_STADIUM_STRUCTURE = {
  capacity: 68532,
  city: 'Philadelphia',
  country: 'USA',
  geoLat: 39.900771,
  geoLong: -75.167469,
  name: 'Lincoln Financial Field',
  playingSurface: 'Grass',
  stadiumID: 18,
  state: 'PA',
  type: 'Outdoor'
};

export function transformFromAPI(apiResponse) {
  const {
    Capacity: capacity,
    City: city,
    Country: country,
    GeoLat: geoLat,
    GeoLong: geoLong,
    Name: name,
    PlayingSurface: playingSurface,
    StadiumID: stadiumID,
    State: state,
    Type: type
  } = apiResponse;

  return {
    capacity,
    city,
    country,
    geoLat,
    geoLong,
    name,
    playingSurface,
    stadiumID,
    state,
    type
  };
}
