import * as rs from 'readline-sync';

let numero1: number  = Number(rs.question('Digite a base: '));
let numero2: number = Number(rs.question('Digite a altura: '));

const area: number = (numero1 * numero2) / 2;

console.log(`A área é: ${area}`);
