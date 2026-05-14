import { TextoSalida } from '../Ejercicios de JavaScript/Ejercicio22.js'

const input = document.getElementById('entrada');
const parrafo = document.getElementById('text-write');
const fondo = document.getElementById('text-content')

input.addEventListener("input", () => {
    TextoSalida(input, parrafo);
if (parrafo.textContent.length > 20) {
    fondo.style.backgroundColor = "chocolate";
} else {
    fondo.style.backgroundColor = "transparent"
}

})






