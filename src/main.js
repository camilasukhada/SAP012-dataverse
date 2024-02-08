import { filterData, sortData} from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';


const cardsItens = document.querySelector("#root");
cardsItens.appendChild(renderItems(data))


const filtro = document.querySelector("#filtro");

let cardData = [...data];


filtro.addEventListener("change", (e) => {
  //recebe o valor do campo filtro de index.html
  let value = e.target.value;

  //usa o valor de "let value" para fazer o split do valor pelo caracter | e pega a primeira posição do array que se refere ao campo que será o filtro
  const filterBy = value.split("|")[0];

  //usa o valor de "let value" para fazer o split do valor pelo caracter | e pega a segunda  posição do array que se refere ao valor que irá buscar no dataset
  value = value.split("|")[1];

  if (value === "todos") {
    cardData = [...data];
  } else {
    cardData = filterData(data, filterBy, value);
  }
  cardsItens.innerHTML = "";

  cardsItens.appendChild(renderItems(cardData));
})

const ordenacao = document.querySelector("#ordenacao");

ordenacao.addEventListener("change", (e) => {
  const orderValue = e.target.value;

  if (orderValue === "asc") {
    cardData = sortData(cardData, "mediaSalarialJr", "asc");
  }
  else if (orderValue === "desc"){
    cardData = sortData(cardData, "mediaSalarialJr", "desc");
  }

  cardsItens.innerHTML = "";
  cardsItens.appendChild(renderItems(cardData));
})