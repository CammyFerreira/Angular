import * as rs from 'readline-sync';

const tempCelsius = Number(rs.question('Digite a temperatura em Celsius'));

const tempKelvim = tempCelsius + 273;
const tempFahrenheit = tempCelsius * 1.8 + 32;

console.log('Temperatura em Kelvin: ' + tempKelvim);
console.log('Temperatura em Fahrenheit: ' + tempFahrenheit);

