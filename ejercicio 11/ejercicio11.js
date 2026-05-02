let kilometros = +prompt(`ingrese kilometros recorrido: `);
let combustible = +prompt(`ingrese litros de combustible consumido: `);
if (kilometros > 0 && combustible > 0){
    let combustiblePorKm = combustible/kilometros;
document.write(`usted consumió ${combustiblePorKm} por kilometro`)
}else{
    alert(`¡ERROR!`)
}


