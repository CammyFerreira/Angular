"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var numero1 = Number(rs.question('Digite um número: '));
var numero2 = Number(rs.question('Digite outro número: '));
var numero3 = Number(rs.question('Digite mais um número: '));
var resultado = numero1 * numero2 * numero3;
console.log(resultado);
