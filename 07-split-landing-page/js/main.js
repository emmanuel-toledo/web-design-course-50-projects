const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

/* Evento hover con el mouse */
left.addEventListener('mouseenter', ()=> { container.classList.add('hover-left'); });
/* Evento cuando el hover con el mouse se quita */
left.addEventListener('mouseleave', ()=> { container.classList.remove('hover-left'); });

right.addEventListener('mouseenter', ()=> { container.classList.add('hover-right'); });
right.addEventListener('mouseleave', ()=> { container.classList.remove('hover-right'); });
