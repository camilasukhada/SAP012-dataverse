export const renderItems = (data) => {
  const itens = document.createElement('ul');
  itens.classList.add('container_itens');

  data.forEach((item) => {
    itens.innerHTML += `
 <li itemscope itemtype="carreirasTech" class="container_itens flex-center" >
    <dl itemscope itemtype="carreirasTech"> 
      <dt></dt><dd class="flex-center" class= itemprop="imageUrl"><img src="${item.imageUrl}" itemprop="${item.imageUrl}" alt="Profissional mulher da área da tecnologia." /> </dd>
      <dt></dt> <dd class="flex-center" itemprop="name">${item.name}</dd>
      <dt></dt> <dd class="flex-center" itemprop="shortDescription">${item.shortDescription}</dd>
      <dt>Formação Sugerida:</dt> <dd class="flex-center" itemprop="formacaoSugerida">${item.facts.formacaoSugerida}</dd>
      <dt>Tech Skills:</dt> <dd class="flex-center" itemprop="techSkills">${item.facts.techSkills}</dd>
      <dt>Soft Skills:</dt> <dd class="flex-center" itemprop="softSkills">${item.facts.softSkills}</dd>
      <dt>Média Salarial Júnior:</dt> <dd class="flex-center" itemprop="sort-order">R$ ${item.facts.mediaSalarialJr}</dd>
    </dl>
  </div>
 `;
  })
  itens.className="flex-center";
  return itens;
};