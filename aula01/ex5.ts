import * as rs from 'readline-sync';

const minutos = Number(rs.question('Quantos minutos você joga por dia?'));
const dias = Number(rs.question('Quantos dias por semana?'));

const qtdHoras = minutos * dias * 52 / 60;

console.log('Você jogou em um ano: ' + qtdHoras + ' horas');