const cuadro = document.createElement('div');
cuadro.classList.add('cuadro_2');

const titulo = document.createElement('div');
titulo.textContent = 'footer ';
titulo.classList.add('titulo');

const footer = document.createElement('footer');
footer.classList.add('footer');

const parrafo = document.createElement('p');
parrafo.textContent = 'Encuéntranos en:';
footer.appendChild(parrafo);

const enlace = document.createElement('a');
enlace.href = 'https://www.pc.com';
enlace.textContent = 'www.pc.com';
parrafo.appendChild(enlace);

document.body.appendChild(footer);