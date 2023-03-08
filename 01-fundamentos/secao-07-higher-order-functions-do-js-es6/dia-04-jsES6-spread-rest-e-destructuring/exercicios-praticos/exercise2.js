// Crie uma função sum que, dado um número ilimitado de parâmetros, retorna a soma desses parâmetros. 
// Ao chamar a função dessa forma : sum(4,5,6), o número 15 deve ser retornado.

const sum = (...numeros) => numeros
  .reduce(((acumulador, valorAtual) => acumulador + valorAtual), 0);

console.log(sum(10, 15, 20, 30, 45, 80));
console.log(sum(1, 2, 3, 4));