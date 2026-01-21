import { compareNumbers } from "./modules/comparacionNumeros.js";

/**
 * Muestra el resultado en la página
 */
function showResult() {
    const result = compareNumbers();
    const resultOutput = document.getElementById('result-output');
    if (resultOutput) {
        resultOutput.textContent = result;
    }
}

// Solo usar addEventListener, NO onclick en HTML
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('compare-button');
    if (button) {
        button.addEventListener('click', showResult);
    }
     // initMenu();
//     // Fondo inicial = estrellas
//     //setBackgroundForExercise(0);
});

    