const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8c15cfe6eb588a1b14114d86fd1e28fb&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=8c15cfe6eb588a1b14114d86fd1e28fb&query=";

const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');

function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results);
        data.results.forEach(element =>{

            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');

            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row');

            const div_column = document.createElement('div');
            div_column.setAttribute('class', 'column');

            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');
            image.src = IMG_PATH + element.poster_path;

            const div_center = document.createElement('div')
            div_center.setAttribute('class', 'center');

        
            const title = document.createElement('h3');
            div_card.setAttribute('id', 'title');
            title.innerHTML = `${element.title}`

            div_center.appendChild(image);
            div_card.appendChild(div_center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            main.appendChild(div_row);
        });
    })
    .catch(error => console.error('Error fetching data:', error)); // Added error handling
}

// Fetch initial movies
returnMovies(APILINK);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = ''

    const searchItem = search.value;
    if(searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = '';
    }
});