const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4fd223a643800f435e6ed8a4fd71dc1e';
const IMG_PATH = 'https://image.tmdb/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=4fd223a643800f435e6ed8a4fd71dc1e&query=';

// HTML Elements
const display = document.querySelector('.column');
const form = document.getElementById('form');
const search = document.getElementById('movie-query');

getMovie(APILINK)
// return movie fn
function getMovie(url) {
  fetch(url).then(res => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach(el => {
        const card = document.createElement('div');
        card.classList.add('card');
        const image = document.createElement('img');
        image.classList.add('thumbnail');
        const title = document.createElement('h3');

        title.textContent = el.title;
        image.src = IMG_PATH + el.poster_path;

        card.appendChild(image);
        card.appendChild(title);
        display.appendChild(card);

      });
    });
}

// search query
form.addEventListener('submit', (e) => {
  e.preventDefault();
  display.textContent = ''
  const query = search.value;
  console.log(query);
  if (query) {
    getMovie(SEARCHAPI + query);
    query.value = '';

  } else {
    alert('Please enter a search query');
  }
});

