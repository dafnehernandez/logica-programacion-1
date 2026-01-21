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

let mensaje="", resultado="";

    // Verificar si los tres números son iguales
    if (numero1 === numero2 && numero2 === numero3) {
        mensaje = `Los tres números son iguales: ${numero1}`;
        console.log(mensaje);
        return mensaje;
    } 

    //verificar si hay numeros iguales
    if(numero1 == numero2) {
        mensaje = numero1 > numero3 
        ? `Numero 1 y Numero 2 son iguales: ${numero1} ${numero2} y son mayores que Numero 3: ${numero3}` 
        : `Numero 1 y Numero 2 son iguales: ${numero1} ${numero2} y son menores que Numero 3: ${numero3}`;
    }

    else if (numero2 == numero3) {
        mensaje = numero2 > numero1 
        ? `Numero 2 y Numero 3 son iguales: ${numero2} ${numero3} y son mayores que Numero 1: ${numero1}` 
        : `Numero 2 y Numero 3 son iguales: ${numero2} ${numero3} y son menores que Numero 1: ${numero1}`;
    }

    else if (numero1 == numero3){
        mensaje = numero1 > numero2 
        ? `Numero 1 y Numero 3 son iguales: ${numero1} ${numero3} y son mayores que Numero 2: ${numero2}` 
        : `Numero 1 y Numero 3 son iguales: ${numero1} ${numero3} y son menores que Numero 2: ${numero2}`;
    }

    // Crear array con los números
    const numeros = [numero1, numero2, numero3];

    // Crear copias ordenadas
    const ordenDescendente = [numero1, numero2, numero3].sort((a, b) => b - a);
    const ordenAscendente  = [numero1, numero2, numero3].sort((a, b) => a - b);

    // Obtener mayor, centro y menor
    const mayor = ordenDescendente[0];
    const centro = ordenDescendente[1];
    const menor = ordenDescendente[2];

    // Mostrar los valores guardados en la consola
    console.log(`Números ingresados: ${numero1}, ${numero2}, ${numero3}`);
    //orden ascendente/descendente
    console.log(`Orden descendente: ${ordenDescendente.join(", ")}`);
    console.log(`Orden ascendente: ${ordenAscendente.join(", ")}`);

    let evaluacion =  mensaje == "" 
        ? `Número mayor: ${mayor}, Número del centro: ${centro}, Número menor: ${menor}\n\n`
        : `${mensaje}\n\n`;

    console.log (evaluacion);

    //Se forma mensaje de resultado
    resultado += `Números ingresados: ${numero1}, ${numero2}, ${numero3}` 
              + evaluacion 
              + `Orden descendente: ${ordenDescendente.join(", ")}\n Orden ascendente: ${ordenAscendente.join(", ")}`;

    //console.log(resultado `Número mayor: ${mayor}\n` + `Número del centro: ${centro}\n` +`Número menor: ${menor}\n\n`); //mensaje

    return resultado;
}