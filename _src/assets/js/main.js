'use strict';

console.log('>> Ready :)');


//Crear constante con las etiquetas de HTML
const clickDesign = document.querySelector('.design-collapsable');
const clickFill = document.querySelector('.fill-collapsable');
const clickSubmit = document.querySelector('.submit-collapsable');

const collapseDesign = document.querySelector('.design-container');
const collapseFill = document.querySelector('.fill-container');
const collapseSubmit = document.querySelector('.submit-container');

//FUNCIÓN
function openCollapsable (event) {
  collapseDesign.classList.toggle ('hidden');
}
function openCollapsable2 (event) {
collapseFill.classList.toggle ('hidden');
}
function openCollapsable3 (event) {
  collapseSubmit.classList.toggle ('hidden');
}

//Listeners
clickDesign.addEventListener('click', openCollapsable);
clickFill.addEventListener('click', openCollapsable2);
clickSubmit.addEventListener('click', openCollapsable3);

