const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index));
});

function highlightCups(index) {
    if(smallCups[index].classList.contains('full')) { /* Validamos si el elemento seleccionado tiene la clase "full". */
        if((index + 1) < smallCups.length) { /* Validamos si el elemento que seleccionamos es menor al número de "cup-samll" en la aplicación. */
            if(!smallCups[index].nextElementSibling.classList.contains('full')) { /* Validamos si el elento siguiente también tiene clase "full". */
                index--;
            }
        } else {
            index--;
        }
    }
    smallCups.forEach((cup, i) => {
        if(i <= index) { 
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });
    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${ fullCups / totalCups * 330 }px`; /* El valor 330 es el alto de nuestro elemento "cup" más grande. */
        percentage.innerText = `${ fullCups / totalCups * 100 } %`;
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`; /* 250 es el valor que da cada "cup-small". */
    }
}
