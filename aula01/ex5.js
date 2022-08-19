"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var minutos = Number(rs.question('Quantos minutos você joga por dia?'));
var dias = Number(rs.question('Quantos dias por semana?'));
var qtdHoras = minutos * dias * 52 / 60;
console.log('Você jogou em um ano: ' + qtdHoras + 'horas');
