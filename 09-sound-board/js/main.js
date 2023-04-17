const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory','wrong']; // Id de los audios definidos en el HTML.

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSounds();
        document.getElementById(sound).play(); // Id de la etiqueta audio.
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopSounds() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        // Para restablecer un audio primero lo pausamos y luego establecemos la duración actual.
        song.pause();
        song.currentTime = 0;
    })
}
