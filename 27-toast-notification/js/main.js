const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const message = [
    'Message #1',
    'Message #2',
    'Message #3',
    'Message #4',
];

const types = [ 'info', 'success', 'error', 'warning' ];

// Puede probar la siguiente función.
// createNotification('This is a message', 'warning')
button.addEventListener('click', ()=> createNotification(null, null));

// Podríamos enviar como parámetro el mensaje y el tipo de notificación.
function createNotification(message = null, type = null) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomType());
    notif.innerText = getRandomMessage();
    
    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function getRandomMessage() {
    return message[Math.floor(Math.random() * message.length)];
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}