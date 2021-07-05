import getCurrentWeather from './modules/api';

let unitType = 'imperial';
let currentCity = 'Louisville';

function convertKelvinToFarenheit(inputTemp) {
  return Math.round((inputTemp - 273.15) * 1.8 + 32);
}

function convertKelvinToCelsius(inputTemp) {
  return Math.round((inputTemp - 273.15));
}

async function displayCurrentWeather() {
  const myData = await getCurrentWeather(currentCity);
  let currentTemp = '';
  let dailyLow = '';
  let dailyHigh = '';
  if (unitType === 'imperial') {
    currentTemp = convertKelvinToFarenheit(myData.main.temp);
    dailyLow = convertKelvinToFarenheit(myData.main.temp_min);
    dailyHigh = convertKelvinToFarenheit(myData.main.temp_max);
  } else if (unitType === 'metric') {
    currentTemp = convertKelvinToCelsius(myData.main.temp);
    dailyLow = convertKelvinToCelsius(myData.main.temp_min);
    dailyHigh = convertKelvinToCelsius(myData.main.temp_max);
  }
  console.log(`The current temperature is ${currentTemp}.`);
  console.log(`The high temperature is ${dailyHigh}.`);
  console.log(`The low temperature is ${dailyLow}.`);
  console.log(myData);
  document.getElementById('low-temp').textContent = `${dailyLow}°`;
  document.getElementById('current-temp').textContent = `${currentTemp}°`;
  document.getElementById('high-temp').textContent = `${dailyHigh}°`;
}

displayCurrentWeather();
