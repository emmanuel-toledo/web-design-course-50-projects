const range = document.getElementById('range');

range.addEventListener('input', (e) => {
    const value = +e.target.value; // Convertir a numerico con un '+' al inicio.
    const label = e.target.nextElementSibling;

    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width'); // Forma de obtener valor de una propiedad CSS (por ejemplo width) de un elemento desde JS.
    const labelWidth = getComputedStyle(label).getPropertyValue('width');

    const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
    const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

    const max = +e.target.max;
    const min = +e.target.min;

    const left = value * (numWidth / max) - numLabelWidth / 2 + scale(value, min, max, 10, -10);

    label.style.left = `${left}px`;

    label.innerHTML = value;
});

// Esta función se utiliza para convertir un rango de numeros en otro rango de numeros.
// Se hace uso de ella para colocar el label justo en medio del circulo del input.
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}