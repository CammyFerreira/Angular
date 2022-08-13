"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var numero1 = Number(rs.question('Digite a base: '));
var numero2 = Number(rs.question('Digite a altura: '));
var area = (numero1 * numero2) / 2;
console.log("A \u00E1rea \u00E9: ".concat(area));
