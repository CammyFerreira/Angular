import * as rs from 'readline-sync';

let numero1: number  = Number(rs.question('Digite a nota 1: '));
let numero2: number = Number(rs.question('Digite a nota 2: '));
let numero3: number = Number(rs.question('Digite a nota 3: '));

const resultado: number = numero1 * 0.2 + numero2 * 0.3 + numero3 * 0.5;

console.log(resultado);


