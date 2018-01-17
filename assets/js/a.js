let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
const CUADROS = 20;
let columnas = Math.floor(windowWidth / CUADROS);
let filas = Math.floor(windowHeight / columnas);

let cuadroMedida = columnas;

for ( let i = 1; i <= (filas * (columnas * CUADROS)); i++ ) {
  document.getElementById('cuadros-contenedor').insertAdjacentHTML(
    'afterbegin',
    '<div class="cuadro"></div>'
  );
}

let cuadros = document.getElementsByClassName('cuadro');

let randomColor = (min, max) => {
  if ( max > 255 || max < 0 || min > 255 || min < 0) {
    max = 255;
    min = 0;
  }
  let r = Math.floor(Math.random() * (max - min)) + min;
  let g = Math.floor(Math.random() * (max - min)) + min;
  let b = Math.floor(Math.random() * (max - min)) + min;
  let bg = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  return bg;
}

let setBackground = () => {
  for ( let i = 0; i != cuadros.length; i++ ) {
    cuadros[i].style.width = (cuadroMedida + 'px');
    cuadros[i].style.height = (cuadroMedida + 'px');
    cuadros[i].style.backgroundColor = randomColor(230, 250);
  }
  //setTimeout(setBackground, 1000);
}

setBackground();
