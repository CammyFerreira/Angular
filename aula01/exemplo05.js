"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var numero1 = Number(rs.question('Digite a nota 1: '));
var numero2 = Number(rs.question('Digite a nota 2: '));
var numero3 = Number(rs.question('Digite a nota 3: '));
var resultado = numero1 * 0.2 + numero2 * 0.3 + numero3 * 0.5;
console.log(resultado);
