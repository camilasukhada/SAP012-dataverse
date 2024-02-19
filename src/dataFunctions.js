export const filterData = (data, filterBy, value) => {
  return data.filter(function (el) {
    let splitValue = "";

    if (filterBy === "formacaoSugerida") {
      splitValue = el.facts.formacaoSugerida.split(", ");
    } else if (filterBy === "techSkills") {
      splitValue = el.facts.techSkills.split(", ");
    }

    // Utilizando map para criar um array de booleanos indicando se o valor está presente
    const presenceArray = splitValue.map(item => item === value);

    // Utilizando reduce para verificar se pelo menos um dos booleanos é true
    return presenceArray.reduce((acc, currentValue) => {
      return acc || currentValue;
    }, false);
  });
};

export const sortData = (data, sortBy, sortOrder) => {
  return data.sort(function (a, b) {
    let valueA, valueB;

    // Convertendo valores de string para números
    if (typeof a.facts[sortBy] === 'string') {
      valueA = parseFloat(a.facts[sortBy]);
    } else {
      valueA = a.facts[sortBy];
    }

    if (typeof b.facts[sortBy] === 'string') {
      valueB = parseFloat(b.facts[sortBy]);
    } else {
      valueB = b.facts[sortBy];
    }

    if (sortOrder === "asc") {
      if (valueA < valueB) {
        return -1;
      } else if (valueA > valueB) {
        return 1;
      } else {
        return 0;
      }
    } else if (sortOrder === "desc") {
      if (valueA > valueB) {
        return -1;
      } else if (valueA < valueB) {
        return 1;
      } else {
        return 0;
      }
    }
  });
}

export const computeStats = (data, filterBy, value) => {
  const filteredData = filterData(data, filterBy, value);
  const count = filteredData.length;
  return count;
};