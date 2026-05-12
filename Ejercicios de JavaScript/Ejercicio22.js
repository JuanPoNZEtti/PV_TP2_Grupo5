const entrada = document.getElementById("miInput");

const salida = document.getElementById("miParrafo");

export const TextoSalida = (entrada, salida) => {
    const texto = entrada.value;
    salida.textContent = texto;
    console.log(`${texto}`);
};
if(entrada && salida) {
entrada.addEventListener("input", () => {
    TextoSalida(entrada, salida);
});
}