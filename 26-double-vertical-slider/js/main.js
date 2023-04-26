const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLenght = slideRight.querySelectorAll('div').length; // Obtenemos número de div con imagenes.

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLenght - 1)* 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    // Obtenemos el height sin importar que tan grande o pequeña sea la pantalla.
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > (slidesLenght - 1)) {
            activeSlideIndex = 0; // Establecemos la primer imagen.
        }
    } else if( direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = (slidesLenght - 1); // Establecemos la última imagen.
        }
    }
    // Multiplicamos el indice del slide activo por el height de la imagen que es dinámico.
    slideRight.style.transform = `translatey(-${activeSlideIndex * sliderHeight}px)`;
    // Mantenemos este lado positivo para que vaya del lado contrario al de la imagen.
    slideLeft.style.transform = `translatey(${activeSlideIndex * sliderHeight}px)`;
}
