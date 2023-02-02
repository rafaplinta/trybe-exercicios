// Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const elementoPai = document.body;
const pageName = document.createElement('h1');
pageName.innerText = 'TrybeTrip - Agência de Viagens';
elementoPai.appendChild(pageName);
// Adicione a tag main com a classe main-content como filho da tag body;
const mainTag = document.createElement('main');
mainTag.className = 'main-content';
elementoPai.appendChild(mainTag);
// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const sectionTag = document.createElement('section');
sectionTag.className = 'center-content';
mainTag.appendChild(sectionTag);
// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const createP = document.createElement('p');
createP.innerText = 'Viaje pelo Universo Dev conosco!';
sectionTag.appendChild(createP);
// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const sectionTag2 = document.createElement('section');
sectionTag2.classname = 'left-content';
mainTag.appendChild(sectionTag2);
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const sectionTag3 = document.createElement('section');
sectionTag3.classname = 'right-content';
mainTag.appendChild(sectionTag3);
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. 
// Esse elemento deve ser filho do section criado no passo 5;
const imageTag = document.createElement('img');
imageTag.src = 'https://picsum.photos/200';
sectionTag2.appendChild(imageTag);
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. 
// Essa lista deve ser filha do section criado no passo 6;
const unorderedList = document.createElement('ul');
sectionTag3.appendChild(unorderedList);
const numberList = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let number in numberList) {
    const createLi = document.createElement('li');
    createLi.innerHTML = numberList[number];
    unorderedList.appendChild(createLi);
}
// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
const tagH3A = document.createElement('h3');
const tagH3B = document.createElement('h3');
const tagH3C = document.createElement('h3');

mainTag.appendChild(tagH3A);
mainTag.appendChild(tagH3B);
mainTag.appendChild(tagH3C);

// Adicione a classe title na tag h1 criada;
const title = document.querySelector('h1');
title.className = 'title';

// Adicione a classe description nas 3 tags h3 criadas;
const description1 = document.getElementsByTagName('h3')[0];
description1.className = 'description';

const description2 = document.getElementsByTagName('h3')[1];
description2.className = 'description';

const description3 = document.getElementsByTagName('h3')[2];
description3.className = 'description';
// Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
const deletaSection = document.getElementsByClassName('left-content')[0];
mainTag.removeChild(sectionTag2);

// Centralize a section criada no passo 6 (aquele que possui a classe right-content).
const centralizaSection = document.getElementsByClassName('right-content')[0];
centralizaSection.style.marginRight = 'auto';
// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.




