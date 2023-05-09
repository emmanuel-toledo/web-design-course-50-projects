const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = 0;
    const updateCounter = () => {
        const target = Number(counter.getAttribute('data-target')); // Forma de convertir string en número.
        const c = +counter.innerText; // Forma de convertir string en número.

        const increment = target / 200; // Al definir esta variable nos aseguramos que todos los contadores terminen al mismo tiempo.
        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1); // Ejecutamos la función despues de un milisegundo.
        } else {
            counter.innerText = target;
        }
    }
    updateCounter();
});
