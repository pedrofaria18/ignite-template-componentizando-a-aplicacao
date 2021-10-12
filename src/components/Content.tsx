import { MovieCard } from "./MovieCard";

import { GenreResponseProps, MovieProps } from "../App";

import "../styles/content.scss";

interface ContentProps {
  genreResponse: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({ genreResponse, movies }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {genreResponse.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
