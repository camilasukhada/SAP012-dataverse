import { filterData, sortData, computeStats } from './dataFunctions.js';
import { renderItems, renderStatsMessage } from './view.js';
import data from './data/dataset.js';

const cardsItens = document.querySelector("#root");
const filtro = document.querySelector("#filtro");

let cardData = [...data];


filtro.addEventListener("change", (e) => {
  let value = e.target.value;
  const filterBy = value.split("|")[0];
  value = value.split("|")[1];
  if (value === "todos") {
    cardData = [...data];
  } else {
    cardData = filterData(data, filterBy, value);
  }
  cardsItens.innerHTML = "";

  cardsItens.appendChild(renderItems(cardData));

  cardsItens.innerHTML = ""; // Limpa os itens anteriores

  // Renderiza a mensagem de estatísticas apenas se uma categoria do filtro for selecionada
  if (value !== "todos") {
    const count = computeStats(data, filterBy, value);
    const statsMessage = renderStatsMessage(count);
    cardsItens.appendChild(statsMessage);
  }

  cardsItens.appendChild(renderItems(cardData)); // Renderiza os itens filtrados ou todos os itens
});


const ordenacao = document.querySelector("#ordenacao");

ordenacao.addEventListener("change", (e) => {
  const orderValue = e.target.value;

  if (orderValue === "asc") {
    cardData = sortData(cardData, "mediaSalarialJr", "asc");
  }
  else if (orderValue === "desc") {
    cardData = sortData(cardData, "mediaSalarialJr", "desc");
  }

  cardsItens.innerHTML = "";
  cardsItens.appendChild(renderItems(cardData));
});

cardsItens.appendChild(renderItems(data));

const botaoLimpar = document.querySelector("#reset-button");
botaoLimpar.addEventListener("click", () => {
  cardData = [...data];
  cardsItens.innerHTML = "";
  filtro.value = "";
  ordenacao.value = "";
  cardsItens.appendChild(renderItems(data));
})