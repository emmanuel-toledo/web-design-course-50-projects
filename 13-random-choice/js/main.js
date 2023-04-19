const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus(); /* Enfoca directamente al textarea */

textarea.addEventListener('keyup', (event)=> {
    createTags(event.target.value);

    // Validamos si presionamos enter.
    if(event.key === 'Enter') {
        setTimeout(() => {
            event.target.value = '';
        }, 10);
        randomSelect();
    }
});

/* Función para crear tags en el HTML. */
function createTags(input) {
    const tags = input.split(',') // Generamos array de las opciones.
        .filter(tag => tag.trim() !== '') // Validamos un string vacio.
        .map(tag => tag.trim()); // Quitamos espacios iniciales y finales
    tagsEl.innerHTML = '';
    tags.forEach((tag) => {
        const tagEl = document.createElement('span'); // Creamos elemento HTML span.
        tagEl.classList.add('tag'); // Estabelemos clase tag al nuevo span.
        tagEl.innerHTML = tag; // Establecemos el valor del tag en el span.
        tagsEl.appendChild(tagEl); // Agregamos los tags al contenedor.
    });
}

/* Función para seleccionar una opción aleatoria de los span. */
function randomSelect() {
    const times = 30; // Número de veces que se iluminarán los elementos span.

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval); // detenemos intervalo creado antes.
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, times * 100); // 30 multiplicado por 100.
}

// Regresamos el elemento span.
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}