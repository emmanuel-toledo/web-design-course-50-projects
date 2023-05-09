const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Ejecuta la función cuando dejamos presionado el clic en la imagen y la arrastramos fuera de su posición original.
fill.addEventListener('dragstart', dragStart);

// Se ejecuta la función cuando despues de mantener presionado el clic, lo soltamos.
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
    // Se ejecuta cuando posicionamos un elemento sobre el componente, es decir, seleccionar el cuadro azul y arrastrarlo sobre el cuadro blanco sin soltarlo.
    empty.addEventListener('dragover', dragOver);

    // Se ejecuta cuando entramos en la posicion del cuadro blanco y tenemos seleccionado un elemento.
    empty.addEventListener('dragenter', dragEnter);

    // Se ejecuta cuando alejamos el componente seleccionado de la posición del cuadro blanco.
    empty.addEventListener('dragleave', dragLeave);


    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    // De esta forma tendremos la imagen seleccionada y el cuadro donde se encontraba quedará en blanco.
    this.className += ' hold';
    setTimeout(() => {
        this.className = 'invisible'
    }, 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    console.log('drag over');
    // Es necesario cancelar la ejecución predeterminada, para mover el elemento 'fill' al elemento 'empty' deseado con la función 'dragDrop'.
    e.preventDefault();
}

function dragEnter(e) {
    console.log('drag enter');
    // Es necesario cancelar la ejecución predeterminada, para mover el elemento 'fill' al elemento 'empty' deseado con la función 'dragDrop'.
    e.preventDefault();

    this.className += ' hovered';
}

function dragLeave() {
    console.log('drag leave');
    this.className = 'empty';
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}
