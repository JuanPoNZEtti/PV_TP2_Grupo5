let nombres = ['Adolfo', 'Alfonso', 'Rodolfo', 'Alberto', 'Anacleto', 'Rogelio']
let mayor = ''
for(let i = 0; (i<nombres.length); i++){
    console.log(nombres[i]);
    if (nombres[i].length > mayor.length){
        mayor = nombres[i];
    }
}
console.log(`el nombre mas largo es: ${mayor}`);