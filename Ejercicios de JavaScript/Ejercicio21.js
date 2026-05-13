const paisesSelect = document.getElementById("paises");
const capitalesSelect = document.getElementById("capitales");


const datos = {
    Argentina: "Buenos Aires",
    Brasil: "Brasilia",
    Uruguay: "Montevideo",
    Paraguay: "Asuncion",
    Bolivia: "La paz",
    Chile: "Santiago de Chile",
};

for (let pais in datos) {
    const option = document.createElement("option");
    option.textContent = pais;
    paisesSelect.appendChild(option);
}

paisesSelect.addEventListener("change", () => {
    capitalesSelect.innerHTML = "";

    const option = document.createElement("option");
    option.textContent = datos[paisesSelect.value];
    capitalesSelect.appendChild(option);

    console.log(`El pais seleccionado es: ${paisesSelect.value} y su capital es: ${capitalesSelect.value}`);
});