function compareNumbers(){
// Solicitar primer número
let numero1 = parseInt(prompt("Ingresa el primer número:"));

// Solicitar segundo número
let numero2 = parseInt(prompt("Ingresa el segundo número:"));

// Solicitar tercer número
let numero3 = parseInt(prompt("Ingresa el tercer número:"));

//4-7-9
if(numero1 > numero2){
    if(numero1 > numero3){
        console.log("El número más grande es el primer numero ingresado: ", numero1);
    }
    else {
        console.log("El número más grande es el tercer numero ingresado: ", numero3);
    }
}

//numero 2 fue mas grande
else if (numero2 > numero3) {
    console.log("El numero más grande es el segundo numero ingresado:", numero2);
}

//numero 3 es definitivamente el más grande
else{
    console.log("El número más grande es el tercer numero ingresado: ", numero3);
}


// Mostrar los valores guardados en la consola
console.log("Número 1:", numero1);
console.log("Número 2:", numero2);
console.log("Número 3:", numero3);

}