const elements = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++){
  let {tag, texto} = elements[i];
  let createText = document.createElement(tag);
  // createText.innerText = texto;
  let createdText = document.createTextNode(texto);

  createText.appendChild(createdText);
  div.appendChild(createText);
}

container.appendChild(div);