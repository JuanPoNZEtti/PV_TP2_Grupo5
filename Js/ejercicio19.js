import { modificarTexto } from './funciones19.js'; 

const boton = document.querySelector('#btnCambiar');
const parrafo = document.querySelector('#parrafoOriginal');


boton.addEventListener('click', () => {
    modificarTexto(parrafo, "¡Texto actualizado por el módulo JS!");
});