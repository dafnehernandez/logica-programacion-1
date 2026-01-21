export function compareNumbers(){
// Solicitar primer número
let numero1 = parseInt(prompt("Ingresa el primer número:"));

// Solicitar segundo número
let numero2 = parseInt(prompt("Ingresa el segundo número:"));

// Solicitar tercer número
let numero3 = parseInt(prompt("Ingresa el tercer número:"));

//validar que ingresen números

if(isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    return "Error, ingresa numeros validos";
}

let resultado="";
let mayor,menor,centrado;

    // Verificar si los tres números son iguales
    if (numero1 === numero2 && numero2 === numero3) {
        resultado = `Los tres números son iguales: ${numero1}`;
        console.log(resultado);
        return resultado;
    } 

    //verificar si hay numeros iguales
    if(numero1 == numero2) {
        resultado = numero1 > numero3 
        ? `Numero 1 y Numero 2 son iguales: ${numero1} ${numero2} y son mayores que Numero 3: ${numero3}` 
        : `Numero 1 y Numero 2 son iguales: ${numero1} ${numero2} y son menores que Numero 3: ${numero3}`;
    }

    else if (numero2 == numero3) {
        resultado = numero2 > numero1 
        ? `Numero 2 y Numero 3 son iguales: ${numero2} ${numero3} y son mayores que Numero 1: ${numero1}` 
        : `Numero 2 y Numero 3 son iguales: ${numero2} ${numero3} y son menores que Numero 1: ${numero1}`;
    }

    else if (numero1 == numero3){
        resultado = numero1 > numero2 
        ? `Numero 1 y Numero 3 son iguales: ${numero1} ${numero3} y son mayores que Numero 2: ${numero2}` 
        : `Numero 1 y Numero 3 son iguales: ${numero1} ${numero3} y son menores que Numero 2: ${numero2}`;
    }

    //4-7-9
    if(numero1 > numero2){
        if(numero1 > numero3){
            console.log("El número más grande es el primer numero ingresado: ", numero1);
            mayor = "El número más grande es el primer número ingresado: " + numero1;
        }
        else {
            console.log("El número más grande es el tercer numero ingresado: ", numero3);
            mayor = "El número más grande es el tercer número ingresado: " + numero3;
        }
    }

    //numero 2 fue mas grande
    else if (numero2 > numero3) {
        console.log("El numero más grande es el segundo numero ingresado:", numero2);
        mayor = "El número más grande es el segundo número ingresado: " + numero2;
    }

    //numero 3 es definitivamente el más grande
    else{
        console.log("El número más grande es el tercer numero ingresado: ", numero3);
        mayor = "El número más grande es el tercer número ingresado: " + numero3;
    }

    resultado = mayor;

    // Mostrar los valores guardados en la consola
    console.log(`Números ingresados: ${numero1}, ${numero2}, ${numero3}`);
    console.log(resultado); //mensaje
    //orden ascendente/descendente

    return resultado;
}