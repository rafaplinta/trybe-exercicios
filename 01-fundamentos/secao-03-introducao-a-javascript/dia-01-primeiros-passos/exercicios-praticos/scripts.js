
// const constanteA = 25;
// const constanteB = 37;

// if (constanteA > constanteB) {
//     console.log(constanteA);
// } else {
//     console.log(constanteB);
// } 

// const constante1 = 102;
// const constante2 = 80;
// const constante3 = 165;

// if (constante1 > constante2 && constante1 > constante3) {
//     console.log(constante1);
// } else if (constante2 > constante1 && constante2 > constante3) {
//     console.log(constante2);
// } else {
//     console.log(constante3);
// }

// let variavel = -10;

// if (variavel >= 1){
//     console.log("positive");
// } else if (variavel <= -1) {
//     console.log("negative");
// } else {
//     console.log("zero");
// } 

//  const anguloUm = -50;
//  const anguloDois = 50;
//  const anguloTres = 80;

//  const somaAngulos = anguloUm + anguloDois + anguloTres;

//  if (somaAngulos == 180 && anguloUm >= 0 && anguloDois >= 0 && anguloTres >= 0) {
//     console.log(true);
//  } else {
//     console.log(false);
//  }

// const chess = "King";

// switch (chess.toLowerCase()) {
//     case "knight":
//         console.log("Move-se em L");
//         break;

//     case "king":
//         console.log("Move-se em linha reta");
//         break;

//     case "bishop":
//         console.log("Move-se em diagonal");
//         break;
// }

// let percent = 99;

// if (percent >= 90) {
//     console.log("A");
// } else if (percent >= 80){
//     console.log("B");
// } else if (percent >= 70) {
//     console.log("C");
// } else if (percent >= 60) {
//     console.log("D");
// } else if (percent >= 50) {
//     console.log("E");
// } else {
//     console.log("F");
// }

// const num1 = 5;
// const num2 = 8;
// const num3 = 11;

// if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 ===0) {
//     console.log(true);
// } else {
//     console.log(false)
// }

// const n1 = 9;
// const n2 = 7;
// const n3 = 3;

// if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
//     console.log(false);
// } else {
//     console.log(true);
// }

// const custo = 10;
// const venda = 25;

// if (custo >= 0 && venda >= 0) {
//     const custoTotal = custo * 1.2;
//     const lucro = (venda - custoTotal) * 1000;
//     console.log(lucro)
// }else {
//     console.log("Erro")
// }

let inss;
let aliquotaIr;
const salarioBruto = 3000;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11
} else {
    inss = 570.88;
}

const salarioBase = salarioBruto - inss;
console.log(salarioBase)

if (salarioBase <= 1903.98) {
    aliquotaIr = 0;
} else if (salarioBase <= 2826.65) {
    aliquotaIr = (salarioBase * 0.075) - 142.80; 
} else if (salarioBase <= 3751.05 ) {
    aliquotaIr = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    aliquotaIr = (salarioBase * 0.225) - 636.13;
} else {
    aliquotaIr = (salarioBase * 0.275) - 869.36;
}

console.log(aliquotaIr);
console.log("O sal??rio ?? de " + (salarioBase - aliquotaIr));

