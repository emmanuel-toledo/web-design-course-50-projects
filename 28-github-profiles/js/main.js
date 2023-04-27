const API_URL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Utilizando Axios de forma sincrona.
// function getUser(username) {
//     axios.get(`${ API_URL }${ username }`)
//         .then(res => console.log(res))
//         .catch(err => console.log(err));
// }

// Utilizando Axios de forma asincrona.
async function getUser(username) {
    try {
        // Podemos desestructurar la respuesta para solo obtener la data.
        const { data } = await axios(`${ API_URL }${ username }`);
        createUserCard(data);
        getUserRepos(username);
    } catch(err) {
        if(err.response.status == 404) { 
            createErrorCard('No profile with this username');
        } else {
            console.log(err);
        }
    }
}

async function getUserRepos(username) {
    try {
        const { data } = await axios(`${ API_URL }${ username }/repos?sort=created`);
        addReposToCard(data);
    } catch(err) {
        createErrorCard('Problem fetching repos');        
    }
}

function createUserCard(user) {
    const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>
            <div id="repos"></div>
        </div>
    </div> 
    `;
    main.innerHTML = cardHTML;
}

function createErrorCard(message) {
    const cardHTML = `
    <div class="card">
        <h1>${ message }</h1>
    </div>
    `;
    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');
    repos
        .slice(0, 10) // Obtener los primeros 10.
        .forEach(repo => {
            const repoLink = document.createElement('a');
            repoLink.classList.add('repo');
            repoLink.href = repo.html_url;
            repoLink.target = '_blank';
            repoLink.innerText = repo.name;
            reposEl.appendChild(repoLink);
        });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value;
    if(user) {
        getUser(user);
        search.value = '';
    }
});