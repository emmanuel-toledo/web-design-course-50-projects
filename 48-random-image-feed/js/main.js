const url = "https://picsum.photos/";
const rows = 10;
const container = document.querySelector('.container');
for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${ url }${ getRandomSize() }`;
    container.appendChild(img);
}

function getRandomSize() {
    return `${ getRandomNr() }/${ getRandomNr() }`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300;
}