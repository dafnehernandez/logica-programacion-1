import { compareNumbers } from "./modules/comparacionNumeros.js";

/**
 * Muestra el resultado en la página
 */
function showResult() {
    const result = compareNumbers();
    const resultOutput = document.getElementById('result-output');
    if (resultOutput) {
        resultOutput.textContent = result;
        // estilos para el resultado
        resultOutput.style.fontWeight = '600';
        resultOutput.style.color = '#b0652b';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', showResult);
    }
    // initMenu();
    // Fondo inicial = estrellas
    //setBackgroundForExercise(0);
});


    