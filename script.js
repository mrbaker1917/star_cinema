document.addEventListener('DOMContentLoaded', () => {
  fetch('movies.json')
    .then(response => response.json())
    .then(data => {
        const movies = data.movies;
      const list = document.getElementById('now-showing-list');
      list.innerHTML = '';
      movies.forEach(movie => {
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="${movie.image}" alt="${movie.title}" />
          <h2>${movie.title}</h2>
          <a href="${movie.trailerUrl}" target="_blank" title="Opens in new tab.">Watch the Trailer</a>
          <p>${movie.description}</p>
          <h3>Showtimes:</h3><h6>${movie.showtimes.map(time => `${time}`).join('<br>')}</h6>
        `;
        list.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error loading movies:', error);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('coming_soon.json')
    .then(response => response.json())
    .then(data => {
      const movies = data.movies;
      const list = document.getElementById('upcoming-list');
      list.innerHTML = '';
      movies.forEach(movie => {
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="${movie.image}" alt="${movie.title}" />
          <h2>${movie.title}</h2>
          <a href="${movie.trailerUrl}" target="_blank" title="Opens in new tab.">Watch the Trailer</a>
          <p>${movie.description}</p>
          <h4>${movie.Opens}</h4>
        `;
        list.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error loading upcoming movies:', error);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('special_events.json')
    .then(response => response.json())
    .then(data => {
      const events = data.events;
      const list = document.getElementById('special-events-list');
      list.innerHTML = '';
      events.forEach(event => {
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="${event.image}" alt="${event.title}" />
          <h2>${event.title}</h2>
          <p>${event.description}</p>
          <h3>Showtimes:</h3><h6>${event.time.map(time => `${time}`).join('<br>')}</h6>
        `;
        list.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error loading upcoming movies:', error);
    });
});