// Recorrer el array y mostrar cada nota.
// Mostrar cuales notas estan aprobadas.
// Mostrar cuales estan desaprobadas.
// Calcular el promedio general.
// Mostrar la cantidad de notas que estan aprobadas.

const notas = [7, 5, 9, 6, 8, 4, 10, 3, 7, 6];

//a
console.log(`TODAS LAS NOTAS`);
notas.forEach((n,i) =>console.log(`Nota ${i+1}: ${n}`));

//b 
let contador=0;

console.log(`APROBADOS`);
notas.forEach((nota, i) => {
    if (nota >= 6) {
        console.log(`Nota ${i + 1}: ${nota}`);
        contador++;
    }
});

//c
console.log(`DESAPROBADOS`);
notas.forEach((nota, i) => {
    if (nota < 6) {
        console.log(`Nota ${i + 1}: ${nota}`);
    }
});


//d
let sumanotas=0;
notas.forEach(n => sumanotas = sumanotas + n);

let promedio=sumanotas/notas.length;
console.log(`El promedio general de las notas es: ${promedio}`);

//e
console.log(`La cantidad de aprobados es: ${contador}`);