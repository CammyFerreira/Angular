import * as rs from 'readline-sync';

const numero1: number  = Number(rs.question('Digite um número: '));
const numero2: number = Number(rs.question('Digite outro número: '));
const numero3: number = Number(rs.question('Digite mais um número: '));

const resultado: number = numero1 * numero2 * numero3;

console.log(resultado);


