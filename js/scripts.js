const rootStyles = document.documentElement.style;
// - Usando este HTML, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independiente de con cuantos item empiece la lista

// ```html
// <button>Añadir Elementos</button>
// <ul>
//   <li>Item 1</li>
// </ul>
// ```

const buttonElement = document.getElementById('button');
const listElement = document.getElementById('list');

const addItem = () => {
  const newListItemElement = document.createElement('li');
  newListItemElement.textContent =
    'Item ' + (listElement.childElementCount + 1);
  listElement.append(newListItemElement);
};
buttonElement.addEventListener('click', addItem);

// - Usando el input range que te doy haz un generador de encabezados. El input te permite seleccionar un número del 1 al 6, en función de cual elijas ser generará un encabezado con la etiqueta correspondiente. Si elijes un 3, al hacer click en el botón se generará un h3 con el texto "soy un h3", si elijes un 5 un h5 con el texto "soy un h5" y así para todos.

const labelElement = document.getElementById('label');
const rangeElement = document.getElementById('range');
const generateElement = document.getElementById('generate');
const headerGeneratorElement = document.getElementById('header-generator');
const changeLabel = () => {
  labelElement.textContent = rangeElement.value;
};
rangeElement.addEventListener('change', changeLabel);

const generateHeader = () => {
  let headerType = 'h' + labelElement.textContent;
  console.log(headerType);
  const newHeaderElement = document.createElement(headerType);
  newHeaderElement.textContent = `soy un ${headerType}`;
  headerGeneratorElement.append(newHeaderElement);
  console.dir(headerGeneratorElement);
};

generateElement.addEventListener('click', generateHeader);
