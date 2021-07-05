import getCurrentWeather from './modules/api';

function convertKelvinToFarenheit(inputTemp) {
  return Math.round((inputTemp - 273.15) * 1.8 + 32);
}

async function displayCurrentWeather() {
  const myData = await getCurrentWeather();
  console.log(`The current temperature is ${convertKelvinToFarenheit(myData.main.temp)}.`);
  console.log(`The high temperature is ${convertKelvinToFarenheit(myData.main.temp_max)}.`);
  console.log(`The low temperature is ${convertKelvinToFarenheit(myData.main.temp_min)}.`);
}

displayCurrentWeather();
