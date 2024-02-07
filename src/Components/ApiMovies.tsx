import { useState, useEffect } from "react";

interface Movie {
  id: string;
  original_title: string;
  release_date: string;
  poster_path: string;
  genre_ids: number;
}

export const ApiMovies = (page:number) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2Y5NmJlNmNlYWI2ZjY5OTVmYTQ0Mzk2MjQ4Yzg1OCIsInN1YiI6IjY1YjAzZjcwMzk3NTYxMDBhZmQwYjgyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6pjObh04WKk2DX5y8DQSRP1-DWk9fVP1beXU2YZgRr0",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        setTotalPages(response.total_pages);
      })
      .catch((err) => console.error(err));
  }, [page]);

  return [movies, totalPages];
};
