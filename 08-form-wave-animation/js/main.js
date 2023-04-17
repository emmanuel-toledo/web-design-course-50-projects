const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
    label.innerHTML = label.innerText // Obtenemos el texto del label.
        .split('') // Lo transformamos en un arreglo.
        .map((letter, index) => `<span style="transition-delay: ${index * 50}ms">${letter}</span>`) // De cada elemento del arreglo (que es cada letra del label) generamos una etiqueta span.
        .join(''); // Para no mostrar un arreglo en forma de label, convertimos el resultado del arreglo en un string o cadena.
});