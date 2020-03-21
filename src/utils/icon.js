export function getIconFromWeather(desc) {
  return desc.includes('Rain') ? 'weather' : '';
}
