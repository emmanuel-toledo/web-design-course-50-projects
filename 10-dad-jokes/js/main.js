const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const jokeUrl = 'https://icanhazdadjoke.com';

jokeBtn.addEventListener('click', () => {
    generateJoke();
});

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            'Accept' : 'application/json'
        }
    };
    const response = await fetch(jokeUrl, config);
    const data = await response.json();
    jokeElement.innerHTML = data.joke;
}

