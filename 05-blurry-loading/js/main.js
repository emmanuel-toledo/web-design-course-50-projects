const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let interval = setInterval(blurring, 30);

function blurring() {
    load++;
    
    if(load > 99) {
        clearInterval(interval);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0); // La opacidad interpreta valores de 0 a 1.
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

/**
 * Esta función analiza primero, el valor que le enviamos (de 0 a 100), posteriormente le enviamos
 * el valor minimo y maximo de entrada, en este caso sería 0 y 100, al final, definimos los valores de salida
 * en este caso 0 y 1, siendo estos los definidos para establecer un valor a la opacidad.
 * Cuando lleguemos a 100, debemos de colocar una opacidad de 0.
 * https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
 * @param {number} num 
 * @param {number} in_min 
 * @param {number} in_max 
 * @param {number} out_min 
 * @param {number} out_max 
 * @returns number
 */
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}