const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

// Agregamos evento click al panel que es el contenedor de las diferentes opciones.
ratingsContainer.addEventListener('click', (e) => {
    // Cuando damos clic sobre un elemento en especifico que vive dentro del elemento al que se le configuro el evento click.
    // Obtendremos el nodo hijo no directamente el del padre.
    // En este caso evaluamos si damos clic a la imagen de cada satisfacción.
    if(e.target.parentNode.classList.contains('rating')) {
        unmarkRatings();
        e.target.parentNode.classList.add('active'); // Agregamos clase 'active' a nodo padre de la imagen (div con clase 'rating').
        selectedRating = e.target.nextElementSibling.innerHTML; // Obtenemos el texto del elemento siguiente al que dimos clic (dimos clic en la imagen y obtenemso el texto del small siguiente).
    }
    // En este punto puede agregar más validaciones para que no solo funcione al dar clic sobre la imagen.
});

// Si definimos un evento en un elemento al que su padre tiene un evento clic como en este caso, llamara a ambos.
sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = 
    `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br />
    <strong>Feedback: ${ selectedRating }</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `;
});

// Esta es una alternativa pero el ejemplo se hizo de la forma anterior con fines didacticos.
// ratings.forEach(rating => {
//     rating.addEventListener('click', () => {
//         unmarkRatings();
//         rating.classList.add('active');
//     });
// });

function unmarkRatings() {
    ratings.forEach(rating => rating.classList.remove('active'));
}
