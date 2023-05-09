const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function resetDOM() {
    counter.classList.remove('hide');
    finalMessage.classList.remove('show');

    nums.forEach((num) => {
        num.classList.value = '';
    });
    
    nums[0].classList.add('in');
}

/** Función para evaluar las animaciones del contador. */
function runAnimation() {
    nums.forEach((num, index) => {
        /* Almacenamso el incide mayor. */
        const nextToLast = nums.length - 1;
        /* Establecemos un evento cuando termine una animación 'animationend'. */
        num.addEventListener('animationend', (e) => {
            /* Evaluamos si la animación es 'goIn' y el indice es diferente del indice mayor (index de último número). */
            if(e.animationName === 'goIn'&& index !== nextToLast) {
                num.classList.remove('in');
                num.classList.add('out');
            }
            /* Evaluamos si la animación es 'goOut' establecemos al elemento siguiente la clase 'in' para repetir la evaluación anterior con el número siguiente. */
            else if(e.animationName == 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in');
            } 
            /* Si ya no existen más elementos por contar se oculta el contador y se muestra la opción de 'replay'. */
            else {
                counter.classList.add('hide');
                finalMessage.classList.add('show');
            }
        });
    });
}

replay.addEventListener('click', () => {
    resetDOM();
    runAnimation();
});