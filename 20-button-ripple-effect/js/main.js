const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // Obtenemos las coordenadas de donde damos clic en el botón.
        // Estas coordenadas no son tomando en cuenta el tamaño del botón,
        // es decir, no es la coordenada x, y del botón, sino de todo el frame
        // o toda la pantalla. Funcionará correctametne ya que solo se ejecutará.
        // al momento de dar clic en el botón en sí.
        const x = e.clientX;
        const y = e.clientY;

        // De esta forma obtenemos la posición del botón como tal, no del clic que demos.
        // Será tanto la posición del Top como del Left.
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        // Obtenemos las posiciones de X, Y dentro del botón.
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        // Hacemos referencia al elemento button.
        // La palabra this solo se puede usar si al declarar el evento "click" definimos la función como "function (e)..."
        this.appendChild(circle);

        // Eliminamos el elemento span.
        setTimeout(() => circle.remove(), 500);
    });
})