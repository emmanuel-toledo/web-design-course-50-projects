/* Puede ajustar la api para que retorne los valores con una páginación, en este ejemplo solo regresamos una página. */
/* Esta URL puede funcionar si la prueba directamente en el navegador, verá una respuesta JSON. */
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=705c474fbce82739648b3bbd55ef5390&page=1';
/* w1280 equivale al width que queremos que tenga la imagen, en este caso 1280px. */
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
/* URL de búsqueda de peliculas. */
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=705c474fbce82739648b3bbd55ef5390&query="'

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Get Initial movies
getMovies(API_URL);

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();
    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie; // Desestructuramos el objeto "movie".
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${ title }">
            <div class="movie-info">
                <h3>Movie Title</h3>
                <span class="${getClassByRate(vote_average)}">${ vote_average }</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${ overview }
            </div>
        `;
        main.append(movieElement);
    });
}

function getClassByRate(vote) {
    if(vote >= 8) 
        return 'green';
    else if(vote >= 5) 
        return 'orange';
    else
        return 'red';
}

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const searchTerm = search.value;
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
});


