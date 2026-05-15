const edades = [18, 22, 30, 19, 45, 33, 27, 21];  
let sumaEdades = 0;


edades.forEach(edad => {
    console.log(`Edad encontrada: ${edad}`);
    sumaEdades += edad;
});

const promedio = sumaEdades / edades.length;
console.log(`El promedio general de las edades es: ${promedio}`);