const fondo = document.getElementById("body-fondo");
const boton = document.getElementById("btnCambiar")


boton.addEventListener("click",() => {
    const red = Math.floor(Math.random() * (255))+1;
    const green = Math.floor(Math.random() * (255))+1;
    const blue = Math.floor(Math.random() * (255))+1; 

    fondo.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

