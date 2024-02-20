# Dataverse

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Ferramentas utilizadas no processo](#2-ferramentas-utilizadas-no-processo)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Considerações técnicas](#4-considerações-técnicas)
* [5. Objetivos de Aprendizagem](#5-objetivos-de-aprendizagem)
* [6. Testes](#6-testes)
* 

***

## 1. Resumo do projeto

Atualmente há uma grande quantidade de dados produzidos, no entanto, os dados por si só têm pouca utilidade. Para que essas grandes
quantidades de dados se transformem em **informação** fácil de ler para
as usuárias, precisamos entender e processar esses dados. Uma maneira
simples de fazer isso é criando _interfaces_ e _visualizações_.

Neste projeto, foi **construído um _site_ para visualizar um
_conjunto de dados_**. Para isso foi utilizado a ferramenta de inteligência artificial, o **ChatGPT** para gerar um banco de dados em um arquivo javascript, através do [prompting](https://chat.openai.com/share/ba46b56e-6b79-4fec-8b45-3b6c8f2aa134).

Como entrega final, oferecemos um site responsivo que permite **visualizar os dados, filtrá-los, ordená-los e calcular estatísticas**, tendo esses dados relacionados com carreiras de tecnologia. 

* Este projeto foi realizado em dupla por Camila Lara e Fabine Specian.
* O tempo de conclusão do projeto foi de 6 Sprints.
* O projeto foi publicado no [GitHub Pages](link do deploy).

## 2. Ferramentas utilizadas no projeto

* 

- **Visual Studio Code** - É um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código. A escrita dos códigos ocorreu no VSCode.

- **Git** - É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.

- **GitHub** - É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.

- **Bing** - É um mecanismo de busca criado pela Microsoft, também é uma ferramenta que gera imagens com inteligência artificial (IA) utiliza a tecnolocia do DALL-E 2 da OpenAI. Por meio dele foram geradas 24 imagens por IA relacionadas mulheres na área da tecnologia que foram utilizadas nos cards da aplicação.

- **Notion** - É um aplicativo da web freemium para produtividade e anotações desenvolvido pela Notion Labs Inc. Ele oferece ferramentas organizacionais, incluindo gerenciamento de tarefas, rastreamento de projetos, listas de tarefas e marcadores. Utilizado como um importante instrumento de registro, como um diário de bordo nele foi transcrito o passo a passo do projeto.

- **Trello** - É uma ferramenta visual que possibilita ao time o gerenciamento de qualquer tipo de projeto, fluxo de trabalho ou monitoramento de tarefas. É possível adicionar arquivos, checklists ou até mesmo automação: personalizar tudo para que o time trabalhe melhor. Foi a base para a organização e planejamento do backlog e gerenciamento do processo ao longo do projeto.

- **ChatGPT** - É um chatbot online de inteligência artificial desenvolvido pela OpenA. O nome "ChatGPT" combina "Chat", referindo-se à sua funcionalidade de chatbot, e "GPT", que significa Generative Pre-trained Transformer, um tipo de modelo de linguagem grande. Com ele foi possível gerar os dados sobre as informações de cada uma das profissões selecionadas previamente para a aplicação.

- **Canva** - É uma plataforma de design gráfico que permite aos usuários criar gráficos de mídia social, apresentações, infográficos, pôsteres e outros conteúdos visuais. Foi utilizado para a criação do protótipo de baixa fidelidade.

- **Figma** - É um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows. Utilizado para a criação do protótipo de alta fidelidade.

## 3. Funcionalidades

Aqui estão definidas com mais detalhes as funcionalidades que foram implementadas:

* A aplicação permite que a usuária veja os itens dos dados em uma visualização, em estilo de cartões.

* Os cartões destacam os valores das propriedades dos dados que a usuária deseja ver. Uma imagem, nome da profissão, descrição da profissão, formação sugerida, tech skills, soft skills e média salarial.

* A aplicação permite à usuária filtrar os dados por formação sugerida, apresentando 15 opções de graduações.

* A aplicação calcula e exibe uma estatística dos dados.

* A aplicação permite à usuária ordenar os dados. Por média salarial, é possível ordenar de forma ascendente e descendente. 
  
* As funcionalidades de ordenação operam sobre os dados filtrados. Por exemplo, se filtrar as profissões por formação sugerida e escolher Ciência da Comnputação, na sequência ordernar por média salarial de forma ascendente, a aplicação manterá o filtro inicial aplicado.

* A aplicação permite à usuária reiniciar a aplicação, limpando
  filtros e ordenamentos, com um botão Limpar.

* As operações de filtrar, ordenar, limpar, não recarregam a página, mas sim adicionam conteúdo de maneira dinâmica via JavaScript.

* A aplicação é _responsiva_, ou seja, pode ser visualizada sem problemas
  em diferentes tamanhos de tela: celulares, tablets e desktops.

## 3. Considerações Técnicas

A lógica do projeto foi implementada completamente em JavaScript
(ES6), HTML e CSS. Neste projeto, NÃO foi permitido usar bibliotecas ou frameworks, apenas JavaScript puro.

O _boilerplate_ contém uma estrutura de arquivos como ponto de partida, bem como todas as configurações de dependências:

```text
.
├── README.md
├── package.json
├── src
|  ├── data 
|  |  └── dataset.js (O que você gerou com a IA)
|  ├── dataFunctions.js
|  ├── view.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.js
   └── dataFunctions.spec.js
   └── tests-read-only
```
### Scripts / arquivos implementados no desenvolvimento do projeto.

Esta é uma estrutura clara e organizada, pois facilita o entendimento da navegação e escalabilidade do código. Além disso também seguiu o princípio de design de Separação de  responsabilidades no código, onde cada arquivo e pasta tem uma responsabilidade específica.

Para melhor modulação do projeto os arquivos implementados foram distruídos da seguinte forma:

### `src/index.html`

Este é o arquivo que será exibido para a usuária. Também é útil para indicar quais scripts serão usados e para reunir tudo o que foi feito.

### `src/main.js`

Arquivo utilizado para todo o código relacionado à exibição dos dados na tela, à interação com o DOM. 

### `src/dataFunctions.js`

Este arquivo contém toda a funcionalidade relacionada a obter, processar e manipular dados (suas funções). Essas funções são puras e independentes do DOM.

### `src/data`

Nesta pasta, estão os dados gerados com a ajuda da inteligência artificia, ChatGPT.

### `test/dataFunctions.spec.js`

Neste arquivo, foi criado os testes unitários das funções
implementadas no arquivo `dataFunctions.js`.

### `test/data.js`

Amostra de dados para os testes.

### `src/view.js`

Este arquivo contém todas as funções que foram usadas para renderizar os elementos dinamicamente.


## 4. Objetivos de Aprendizagem

### Critérios de código


#### HTML

* **Uso de HTML semântico**

#### CSS

* **Uso de seletores CSS**

#### Web APIs

* **Uso de seletores do DOM**

 * **Manuseio de eventos do DOM (ouvintes, propagação, delegação)**

* **Manipulação dinâmica do DOM**

#### JavaScript

* **Variáveis (declaração, atribuição, escopo)**

* **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

* **Uso de loops (while, for, for..of)**

* **Funções (parâmetros, argumentos, retorno)**

* **Arrays (arrays)**

* **Objetos**

* **Módulos ECMAScript (ES Modules)**


### Critérios do Projeto

#### Definição do produto

Documente brevemente o seu trabalho no arquivo `README.md` do seu repositório,
contando como foi o seu processo de design e como você acredita que o produto
resolve o problema (ou problemas) que sua usuária enfrenta.

#### Histórias de usuário

Depois de entender as necessidades das suas usuárias, escreva as
[Histórias de Usuário](https://pt.wikipedia.org/wiki/Hist%C3%B3ria_de_usu%C3%A1rio)
que representam tudo o que a usuária precisa fazer/ver.
As **Histórias de Usuário** devem ser o resultado do seu processo de
pesquisa ou _research_ das suas usuárias.

Certifique-se de incluir a Definição de Pronto (_definition of done_) e
os Critérios de Aceitação para cada uma.

Use suas histórias de usuário para planejar seus sprints, dividindo cada
história em tarefas.

Na medida do possível, conclua uma História de Usuário antes de passar
para a próxima (atendendo à Definição de Concluído e aos Critérios de Aceitação).

#### Geração dos dados

O tema será de sua escolha, por exemplo, podem ser personagens importantes
na história, personagens inventados, países, filmes... etc.

No próximo projeto, com a ajuda da inteligência artificial, você deve fazer
com que a usuária possa conversar com os dados gerados. Por exemplo, se os
dados estiverem mostrando um país, a usuária poderia perguntar em que ano
foi fundado ou qual é a sua capital, etc. Leve isso em consideração ao
gerar seu conjunto de dados.

Estes dados serão salvos em um arquivo JavaScript. Este arquivo deve exportar
uma matriz com 24 objetos. E a estrutura de cada objeto deve ser a seguinte:

* `id`: Identificador único (não pode haver dois elementos com o mesmo `id`).
  Deve ser uma string de até 32 caracteres, em minúsculas, composta apenas
  por letras, números, sublinhados (`_`) ou hífens (`-`).
  Por exemplo: `"ada-lovelace"`.
* `name`: O nome do personagem, país, filme, etc.
* `shortDescription`: Breve descrição do elemento. Esta descrição deve
  ter no máximo 20 palavras.
* `description`: Descrição estendida do elemento. Esta descrição deve ter entre
  80 e 100 palavras. Ao mostrar este dado na tela, você pode truncá-lo para
  que não ocupe muito espaço.
* `imageUrl`: URL da imagem. Esta imagem será gerada por meio de alguma
  ferramenta baseada em inteligência artificial. Depois de gerar a imagem
  e salvá-la no seu repositório, você deverá adicionar a URL neste campo.
* `facts`: Um objeto com pelo menos **3** "fatos" ou "informações" sobre
  este elemento, no formato `"nome": "valor"`, por exemplo:

```json
  "facts": {
    "yearOfBirth": 1843,
    "placeOfBirth": "London, England",
    "mainField": "Computer Science",
  }
  ```

  Os _nomes das propriedades_ devem estar no formato _camelCase_.
  Por exemplo, **nenhum** dos seguintes nomes seria válido:

  ```json
  "facts": {
    "year_of_birth": 1843,
    "Place of Birth": "London, England",
    "MainField": "Computer Science",
  }
  ```

  Os _valores das propriedades_ só podem ser do tipo `number`, `boolean`
  ou uma `string` com no máximo 64 caracteres (essa **não** tem restrições
  quanto ao tipo de caracteres que podem conter).

  E, por último, tenha em mente duas coisas:

  1. Todos os elementos do conjunto de dados devem compartilhar as mesmas propriedades
  em `facts`, ou seja, se um elemento tem uma propriedade `anoDeNascimento`,
  o restante dos elementos do array também devem ter essa propriedade.
  2. Não é necessário que os nomes das propriedades estejam em inglês,
  `"localDeNascimento"` é um nome igualmente válido.

* `extraInfo`: E por último, um campo opcional livre, similar a `facts`. Se precisar,
  aqui você pode inserir qualquer outro tipo de informação no formato
  `"nome": "valor"`, mas sem restrições sobre o tipo de dado do valor. Por exemplo:

  ```json
  "extraInfo": {
    "imagePrompt": "Um texto muito, muito longo...",
    "writings": [
      "Vol. 1",
      "Vol. 2",
      "Vol. 3",
      "Vol. 4"
    ]
  }
  ```

Um exemplo de data, de acordo com os requisitos anteriores, poderia ser:

```js
export default [
  {
    "id": "ada-lovelace",
    "name": "Ada Lovelace",
    "shortDescription": "Pioneira da informática, foi a primeira programadora.",
    "description": "Uma visionária do século XIX...",
    "imageUrl": "URL_DA_IMAGEM_GERADA",
    "facts": {
      "yearOfBirth": 1843,
      "placeOfBirth": "London, England",
      "mainField": "Computer Science",
    }
  },
  //... 23 objetos más
]
```

A data gerada deve ser substituída pelo conteúdo deste arquivo:
`./src/data/dataset.js`.

**O tempo estimado que você deveria dedicar à geração desses
dados é de no máximo dois dias.** Se após esse tempo você não
tiver um conjunto de dados gerados, deverá usar os dados de exemplo
localizados em:
`./src/data/dataset.js`.

As URLs das imagens dentro do arquivo JavaScript devem vincular-se às imagens
para cada elemento da matriz.
Essas imagens podem ser geradas por inteligência
artificial ou imagens que você pode encontrar na web.
Para a geração de imagens, recomendamos usar o
[gerador de imagens do Bing](https://www.bing.com/create).
Assim que tiver a imagem, faça o download dela ou obtenha a URL,
para adicioná-la ao conjunto de dados.

Depois de ter o arquivo JavaScript completo, lembre-se de executar os testes
com `npm run test` para verificar se o arquivo está cumprindo o que foi
solicitado.

Uma vez que você delimitou seu campo de interesse e gerou o arquivo JavaScript
com a ajuda da inteligência artificial, dedique
tempo para compreender profundamente sua usuária e suas
necessidades específicas. A partir desse entendimento, você poderá projetar a
interface que facilite uma interação mais eficaz e uma compreensão mais
completa dos dados apresentados.

Nota: embora você perceba que não está utilizando todas as informações geradas em
sua interface, é necessário gerá-la completamente. No próximo projeto
você usará o conjunto de dados completo, especialmente ao permitir que o usuário
possa interagir através de chat com os dados gerados.

#### Prompt usado

Dentro do readme que você criará, deve incluir uma captura de tela
do seu prompt utilizado para gerar os dados. Se você usou vários prompts,
pode anexar todas as capturas que precisar.

#### Design de Interface de Usuário

##### Protótipo de alta fidelidade

Usando os wireframes ou esboços (_sketches_) da sua solução de interface como
base, o próximo passo é projetar sua Interface de Usuário
(UI - _User Interface_). Para isso, você deve aprender a utilizar
alguma ferramenta de design visual.
Nós recomendamos o [Figma](https://www.figma.com/), que é
uma ferramenta que funciona no navegador e, além disso, você pode criar
uma conta gratuitamente. No entanto, você é livre para usar outros editores
gráficos como Illustrator, Photoshop, etc.

O design deve representar o _ideal_ da sua solução. Digamos que é o que
você desejaria implementar se tivesse tempo ilimitado para trabalhar.
Além disso, seu design deve seguir os fundamentos de _visual design_.

Lembre-se de solicitar feedback do seu protótipo às suas colegas e/ou coaches.

#### Testes de usabilidade

Durante o desafio, você deverá realizar testes de usabilidade com diferentes usuárias, e com base nos resultados, deverá iterar seus designs. Conte-nos quais problemas de usabilidade você identificou nos testes e como os melhorou em sua proposta final.

#### Implementação da Interface de Usuário (HTML/CSS/JS)

Depois de projetar sua interface de usuário, você deverá trabalhar em sua implementação.
**Não** é necessário construir a interface exatamente como você a projetou.
Seu tempo de hacking é limitado, então você terá que priorizar.

Revise [as funcionalidades](#3-funcionalidades) que o projeto requer da interface.


## 8. Objetivos de aprendizagem

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

### HTML

- **Uso de HTML semântico**

### CSS

- **Uso de seletores de CSS**


- **Modelo de caixa (box model): borda, margem, preenchimento**

- **Uso de flexbox em CSS**

### Web APIs

-**Uso de seletores de DOM**


- **Manipulação de eventos de DOM (listeners, propagação, delegação)**

  

- **Manipulação dinâmica de DOM**

### JavaScript

- **Diferenciar entre tipos de dados primitivos e não primitivos**

- **Arrays (arranjos)**

-**Objetos (key, value)**

-**Variáveis (declaração, atribuição, escopo)**

-**Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

- **Uso de laços (while, for, for..of)**

-**Funções (params, args, return)**

-**Testes unitários (unit tests)**

-**Módulos de ECMAScript (ES modules)**

-**Uso de linter (ESLINT)**

-**Uso de identificadores descritivos (Nomenclatura e Semântica)**

-**Diferença entre expressões (expressions) e declarações (statements)**

### Controle de Versões (Git e GitHub)

-**Git: Instalação e configuração**

-**Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

-**Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**

-**GitHub: Criação de contas e repositórios, configuração de chave SSH**

- **GitHub: Implantação com GitHub Pages**

-**GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**

### Centrado no usuário

- **Desenhar e desenvolver um produto ou serviço colocando as usuárias no centro**

### Design de produto

- **Criar protótipos para obter feedback e iterar**

- **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

### Pesquisa

- **Planejar e executar testes de usabilidade**

### AI Prompting

- **Dando Instruções**

- **Few shot prompting**


* Quem são as principais usuárias do produto?
* Quais são os objetivos dessas usuárias em relação ao produto?
* Quais são os dados mais relevantes que elas desejam ver na interface e por quê?
* Quando elas usam ou usariam o produto?
* Toda a sua pesquisa anterior deve resultar em todas as Histórias
  de Usuária do seu projeto.
* Não faça protótipos de alta fidelidade de todas as suas Histórias. Comece
  somente pelos que são necessários para o seu Sprint 1
  (primeira semana de trabalho). Mais dicas no guia de organização
  para o projeto.


## 6. Testes
Foram executados os testes de cada grupo de objetivos
de aprendizagem individualmente com os seguintes comandos:

``` sh
npm run test:oas-html
npm run test:oas-css
npm run test:oas-web-api
npm run test:oas-js
npm run test:oas-prompting
npm run test:oas // Este é para rodar todos os testes de OAs.
```
#### Testes unitários

O _boilerplate_ deste projeto não inclui Testes Unitários, então
você terá que escrevê-los para as funções responsáveis por _processar_,
_filtrar_ e _ordenar_ os dados, bem como _calcular_ estatísticas.
Este projeto utiliza o framework [Jest](https://jestjs.io/) para executar
os testes unitários, então recomendamos que consulte sua documentação.

Seus _testes unitários_ devem cobrir 70% das _declarações_
(_statements_), _funções_ (_functions_), _linhas_ (_lines_), e _ramificações_
(_branches_) do arquivo `src/dataFunctions.js` que contém suas funções e
está detalhado na seção de [Considerações técnicas](#src/data.js).