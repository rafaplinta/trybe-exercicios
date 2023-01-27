// const number = 10; 
// let fatorial = number;

// for (let index = number; index > 1; index -= 1) {
//     fatorial = fatorial * (index - 1);
// }

// console.log(fatorial);

// let word = "Rafaela";
// let drow = '';

// for (let index = word.length - 1 ; index >= 0; index -= 1) {
//   drow += word[index];
// }

// console.log(drow)

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = '';

// for (index = 0; index < array.length; index += 1) {
//   if (array[index].length > maiorPalavra.length) {
//     maiorPalavra = array[index]
//   } 
// }
// console.log(maiorPalavra)

// let menorPalavra = '';

// for (index = 0; index < array.length; index += 1) {
//   if (array[index].length < maiorPalavra.length) {
//     menorPalavra = array[index]
//   } 
// }
// console.log(menorPalavra)

// let primos = [];

// for (index = 2; index <= 50; index += 1) {
//     if (index % index === 0 && index % 1 !== 0) {
//       primos.push(index);
//     }
// }

// console.log(primos);

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(property + ' = ' + object[property]);
}
