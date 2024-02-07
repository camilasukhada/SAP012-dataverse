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































/*export const sortData = (data, sortBy, sortOrder) => {

 

/*export sortOrder

export estatística*/