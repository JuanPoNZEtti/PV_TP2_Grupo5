const calcularMayor = (n1, n2) => {
    n1 > n2 ? document.write(`${n1}, el numero 1 es mayor`) : n1 < n2 ? document.write(`${n2}, el numero 2 es mayor`) : n1=n2 ? document.write(`son iguales`) : document.write(`¡ERROR! datos incorrectos`);
}

let numero1 = +prompt(`ingrese un numero: `);
let numero2 = +prompt(`ingrese otro numero: `);

calcularMayor(numero1,numero2);

