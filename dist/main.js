/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/api */ \"./src/modules/api.js\");\n\n\nlet unitType = 'imperial';\nlet currentCity = 'Louisville';\n\nfunction convertKelvinToFarenheit(inputTemp) {\n  return Math.round((inputTemp - 273.15) * 1.8 + 32);\n}\n\nfunction convertKelvinToCelsius(inputTemp) {\n  return Math.round((inputTemp - 273.15));\n}\n\nfunction customizeApiData(inputData) {\n  const myData = {};\n  if (unitType === 'imperial') {\n    myData.currentTemp = convertKelvinToFarenheit(inputData.main.temp);\n    myData.dailyHigh = convertKelvinToFarenheit(inputData.main.temp_max);\n    myData.dailyLow = convertKelvinToFarenheit(inputData.main.temp_min);\n  } else if (unitType === 'metric') {\n    myData.currentTemp = convertKelvinToCelsius(inputData.main.temp);\n    myData.dailyHigh = convertKelvinToCelsius(inputData.main.temp_max);\n    myData.dailyLow = convertKelvinToCelsius(inputData.main.temp_min);\n  }\n  myData.location = inputData.name;\n  return myData;\n}\n\nfunction determineUnitType() {\n  if (document.getElementById('imperial').checked) {\n    unitType = 'imperial';\n  } else if (document.getElementById('metric').checked) {\n    unitType = 'metric';\n  }\n}\n\nasync function displayCurrentWeather() {\n  const apiData = await (0,_modules_api__WEBPACK_IMPORTED_MODULE_0__.default)(currentCity);\n  console.log(apiData);\n  determineUnitType();\n  const myData = customizeApiData(apiData);\n  document.getElementById('low-temp').textContent = `${myData.dailyLow}°`;\n  document.getElementById('current-temp').textContent = `${myData.currentTemp}°`;\n  document.getElementById('high-temp').textContent = `${myData.dailyHigh}°`;\n  document.getElementById('current-location').textContent = myData.location;\n}\n\ndisplayCurrentWeather();\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCurrentWeather)\n/* harmony export */ });\nconst apiKey = '48e569b4a59bddb26d06c68542bc69a6';\n\nasync function getCurrentWeather(city) {\n  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, { mode: 'cors' });\n  const weatherData = await response.json();\n  return weatherData;\n}\n\n\n//# sourceURL=webpack://weather/./src/modules/api.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;