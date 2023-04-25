const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false;
let color = 'black';
let x, y;

// Evento cuando damos clic con el mouse y lo mantenemos.
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    // Obtenemos las posiciones del mouse.
    x = e.offsetX;
    y = e.offsetY;
    console.log(x, y);
});

// Evento cuando damos soltamos el clic del mouse despues de haberlo seleccionado.
canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    // Obtenemos las posiciones del mouse.
    x = undefined;
    y = undefined;
    console.log(x, y);
});

// Evento cuando movemos el mouse sobre el elemento.
canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

// Para construir un circulo utilizamos las posiciones X, Y.
function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill();
}

// Para dibujar una línea es necesario las coordenadas X, Y de inicio y las coordenadas X, Y finales.
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2; // Multiplicamos el tamaño de la línea para ocultar los circulos que crearemos.
    ctx.stroke();
}

// Ejemplos de ejecución de las funciones anteriores.
// drawCircle(100, 200);
// drawLine(300, 300, 400, 500);

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}

colorEl.addEventListener('change', (e) => color = e.target.value);

increaseBtn.addEventListener('click', (e) => {
    size++;
    if(size > 50) {
        size = 50;
    }
    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', (e) => {
    size--;
    if(size < 1) {
        size = 1;
    }
    updateSizeOnScreen();
});

clearEl.addEventListener('click', () => {
    // De esta forma limpiamos el contenido del canvas.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});