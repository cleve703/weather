import getCurrentWeather from './modules/api';

let unitType = 'imperial';
let currentCity = 'Ashburn';

function convertKelvinToFarenheit(inputTemp) {
  return Math.round((inputTemp - 273.15) * 1.8 + 32);
}

function convertKelvinToCelsius(inputTemp) {
  return Math.round((inputTemp - 273.15));
}

function customizeApiData(inputData) {
  const myData = {};
  if (unitType === 'imperial') {
    myData.currentTemp = convertKelvinToFarenheit(inputData.main.temp);
    myData.dailyHigh = convertKelvinToFarenheit(inputData.main.temp_max);
    myData.dailyLow = convertKelvinToFarenheit(inputData.main.temp_min);
  } else if (unitType === 'metric') {
    myData.currentTemp = convertKelvinToCelsius(inputData.main.temp);
    myData.dailyHigh = convertKelvinToCelsius(inputData.main.temp_max);
    myData.dailyLow = convertKelvinToCelsius(inputData.main.temp_min);
  }
  myData.location = inputData.name;
  return myData;
}

function determineCurrentCity() {
  const inputCity = document.getElementById('city-input');
  if (inputCity.value) {
    currentCity = inputCity.value;
    console.log(currentCity);
  }
}

function determineUnitType() {
  if (document.getElementById('imperial').checked) {
    unitType = 'imperial';
  } else if (document.getElementById('metric').checked) {
    unitType = 'metric';
  }
}

async function displayCurrentWeather() {
  determineCurrentCity();
  const apiData = await getCurrentWeather(currentCity);
  console.log(apiData);
  determineUnitType();
  const myData = customizeApiData(apiData);
  document.getElementById('low-temp').textContent = `${myData.dailyLow}°`;
  document.getElementById('current-temp').textContent = `${myData.currentTemp}°`;
  document.getElementById('high-temp').textContent = `${myData.dailyHigh}°`;
  document.getElementById('current-location').textContent = myData.location;
}

displayCurrentWeather();
document.getElementById('submit-city').addEventListener('click', displayCurrentWeather);
// document.getElementById('location-form').addEventListener('submit', displayCurrentWeather);