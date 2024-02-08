import { filterData, computeStats } from './dataFunctions.js';
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

  cardsItens.innerHTML = ""; // Limpa os itens anteriores

  // Renderiza a mensagem de estatísticas apenas se uma categoria do filtro for selecionada
  if (value !== "todos") {
    const count = computeStats(data, filterBy, value);
    const statsMessage = renderStatsMessage(count);
    cardsItens.appendChild(statsMessage);
  }

  cardsItens.appendChild(renderItems(cardData)); // Renderiza os itens filtrados ou todos os itens
});

cardsItens.appendChild(renderItems(data));














 