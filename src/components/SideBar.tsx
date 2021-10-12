import { Button } from "./Button";

import { GenreResponseProps } from "../App";

import "../styles/sidebar.scss";

interface SidebarProps {
  genres: GenreResponseProps[];
  setSelectedGenreId(id: number): void;
  selectedGenreId: number;
}

export function SideBar({
  genres,
  selectedGenreId,
  setSelectedGenreId,
}: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => setSelectedGenreId(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
