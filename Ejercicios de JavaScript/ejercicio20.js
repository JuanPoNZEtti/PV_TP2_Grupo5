const enviarBoton = document.querySelector("#button-enviar")


enviarBoton.addEventListener('click', function(){
const nombre = document.querySelector("#alumno-name").value
const apellido = document.querySelector("#alumno-apellido").value
const lu = document.querySelector("#alumno-lu").value

alert(`Nombre: ${nombre}
Apellido: ${apellido}
LU: ${lu}`)
})


