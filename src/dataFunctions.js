export const filterData = (data, filterBy, value) => {
  return data.filter(function (el) {
    let splitValue = "";

    if (filterBy === "formacaoSugerida") {
      splitValue = el.facts.formacaoSugerida.split(", ");
    } else if (filterBy === "techSkills") {
      splitValue = el.facts.techSkills.split(", ");
    }

    for (let i = 0; i < splitValue.length; i++) {
      if (splitValue[i] === value) {
        return true;
      }
    }
    return false;
  });
}

export const sortData = (data, sortBy, sortOrder) => {
  return data.sort(function (a, b) {
    const valueA = a.facts[sortBy];
    const valueB = b.facts[sortBy];

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