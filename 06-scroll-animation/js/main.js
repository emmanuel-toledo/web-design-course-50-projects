const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    // Definimos un punto máximo en el bottom para saber si mostramos o no los elementos, según el scroll que se de.
    const triggerBottom = window.innerHeight / 5 * 4;
    
    boxes.forEach((box) => {
        /* La función getBoundingClientRect nos retorna las posiciones donde se encuentra el objeto en cuestion. */
        /* https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect */
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}
