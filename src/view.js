export const renderItems = (data) => {
  const itens = document.createElement('ul');
  itens.classList.add('container_itens');

  data.forEach((item) => {
    itens.innerHTML += `
 <li itemscope itemtype="carreirasTech" class="container_itens" >
    <dl itemscope itemtype="carreirasTech"> 
      <dt class="font-size"></dt><dd itemprop="imageUrl" class="justify-align font-size"><img class="justify-align" src="${item.imageUrl}" itemprop="${item.imageUrl}" alt="Profissional mulher da área da tecnologia." /> </dd>
      <dt class="font-size"></dt><dd itemprop="name" class="justify-align font-size">${item.name}</dd>
      <dt class="font-size"></dt><dd itemprop="shortDescription"class="justify-align font-size">"${item.shortDescription}"</dd>
      <dt class="font-size">Formação Sugerida:</dt><dd itemprop="formacaoSugerida" class="font-size">${item.facts.formacaoSugerida}.</dd>
      <dt class="font-size">Tech Skills:</dt><dd itemprop="techSkills">${item.facts.techSkills}.</dd>
      <dt class="font-size">Soft Skills:</dt><dd itemprop="softSkills">${item.facts.softSkills}.</dd>
      <dt class="font-size">Média Salarial Júnior:</dt><dd itemprop="tipoDeOrdem" class="font-size">R$ ${item.facts.mediaSalarialJr}.</dd>
    </dl>
  </div>
 `;
  })
  itens.className="flex-center";
  return itens;
};

export const renderStatsMessage = (count) => {
  const statsMessage = document.createElement('div');
  statsMessage.textContent = `Exibindo ${count} carreira(s) relacionada(s) a essa formação:`;
  statsMessage.className="estatistica";
  return statsMessage;
};

