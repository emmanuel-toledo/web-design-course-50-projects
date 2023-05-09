const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

// Pudieramos usar el evento dblclick pero haremos nuestro propio doble clic.
// loveMe.addEventListener('dblclick', (e) => { });

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        // Validamos si pasaron 800 milisegundos entre cada doble clic.
        // En este punto dimos un doble click.
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
});

function createHeart(e) {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    
    // Obtenemos las posiciones del clic dentro de la imagen.
    const x = e.clientX;
    const y = e.clientY;

    // Obtenemos las posiciones del clic de toda la pantalla.
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart);

    times.innerHTML = ++timesClicked;

    setTimeout(() => heart.remove(), 1000);
}