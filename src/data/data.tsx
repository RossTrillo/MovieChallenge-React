interface Movie {
    original_title: string;
    poster_path: string;
    release_date: string;
    // Agrega otras propiedades si es necesario
  }

  const initialMovieList = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2Y5NmJlNmNlYWI2ZjY5OTVmYTQ0Mzk2MjQ4Yzg1OCIsInN1YiI6IjY1YjAzZjcwMzk3NTYxMDBhZmQwYjgyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6pjObh04WKk2DX5y8DQSRP1-DWk9fVP1beXU2YZgRr0'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', initialMovieList)
    .then(response => response.json())
    .then((response: { results: Movie[] }) => { // <-- Utilizamos la interfaz Movie aquí
      // Nuevo arreglo con los datos específicos
      const newData = response.results.map((movie: Movie) => { // <-- Utilizamos la interfaz Movie aquí
        return {
          original_title: movie.original_title,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
        };
      });
  
      console.log(newData); // Muestra el nuevo arreglo con los datos específicos
    })
    .catch(err => console.error(err));