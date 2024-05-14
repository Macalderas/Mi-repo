const cuadro = document.createElement('div');
cuadro.classList.add('cuadro');

const titulo = document.createElement('div');
titulo.textContent = 'Componentes de la pc ';
titulo.classList.add('titulo');

const nav = document.createElement('nav');
nav.classList.add('navegacion');

const ul = document.createElement('ul');
const items = ['Inicio', 'Acerca de', 'Cambio'];
items.forEach(item => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#';
  a.textContent = item;
  li.appendChild(a);
  ul.appendChild(li);
});
nav.appendChild(ul);


cuadro.appendChild(titulo);
cuadro.appendChild(nav);


document.body.appendChild(cuadro);















  
