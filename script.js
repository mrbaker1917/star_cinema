document.addEventListener('DOMContentLoaded', () => {
  fetch('movies.json')
    .then(response => response.json())
    .then(data => {
        const movies = data.movies;
      const list = document.getElementById('now-showing-list');
      console.log(movies)
      list.innerHTML = '';
      movies.forEach(movie => {
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="${movie.image}" alt="${movie.title}" />
          <h2>${movie.title}</h2>
          <p>${movie.description}</p>
          <p>Rating: ${movie.rating} / 5</p>
          <p>Release Year: ${movie.releaseYear}</p>
          <a href="${movie.trailerUrl}" target="_blank">Watch Trailer</a>
          <p>Showtimes:<br>${movie.showtimes.map(time => `${time}`).join('<br>')}</p>
        `;
        list.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error loading movies:', error);
    });
});