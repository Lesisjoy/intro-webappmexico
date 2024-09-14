// Obtener los elementos del DOM
const greenRange = document.getElementById('greenRange');
const redRange = document.getElementById('redRange');

const greenHex = document.getElementById('greenHex');
const whiteHex = document.getElementById('whiteHex'); // Fijo
const redHex = document.getElementById('redHex');

const greenBox = document.getElementById('greenBox');
const whiteBox = document.getElementById('whiteBox'); // Fijo
const redBox = document.getElementById('redBox');

// Función para convertir RGB a Hexadecimal
function rgbToHex(rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

// Función para actualizar los colores y códigos hexadecimales
function updateColors() {
    const greenValue = greenRange.value;
    const redValue = redRange.value;

    // Actualizar los colores de los recuadros
    greenBox.style.backgroundColor = `rgb(0, ${greenValue}, 0)`;  // Verde (Esperanza)
    redBox.style.backgroundColor = `rgb(${redValue}, 0, 0)`;  // Rojo (Sangre)

    // Actualizar los códigos hexadecimales
    greenHex.textContent = `#00${rgbToHex(greenValue)}00`;
    redHex.textContent = `#${rgbToHex(redValue)}0000`;
}

// Agregar eventos a los sliders
greenRange.addEventListener('input', updateColors);
redRange.addEventListener('input', updateColors);

// Inicializar los colores
updateColors();

