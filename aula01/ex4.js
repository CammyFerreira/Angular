"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var tempCelsius = Number(rs.question('Digite a temperatura em Celsius'));
var tempKelvim = tempCelsius + 273;
var tempFahrenheit = tempCelsius * 1.8 + 32;
console.log('Temperatura em Kelvin' + tempKelvim);
console.log('Temperatura em Fahrenheit' + tempFahrenheit);
