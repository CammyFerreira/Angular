import * as rs from 'readline-sync';

const nome: string = rs.question('Digite seu nome: ');

console.log(`Bem-vindo ${nome}`);