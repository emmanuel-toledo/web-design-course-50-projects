const panels = document.querySelectorAll('.panel');

console.log(panels);

/** Agregamos evento click a cada elemento. */
panels.forEach((panel) => {
    panel.addEventListener('click', ()=> {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

/** Función para eliminar clase 'active' de cada panel. */
function removeActiveClasses() {
    panels.forEach((panel) => panel.classList.remove('active'));
}
