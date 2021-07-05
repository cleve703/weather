const apiKey = '48e569b4a59bddb26d06c68542bc69a6';

export default async function getCurrentWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`, { mode: 'cors' });
  const weatherData = await response.json();
  return weatherData;
}
