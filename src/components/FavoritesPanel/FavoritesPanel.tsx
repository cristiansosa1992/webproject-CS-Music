import FavoriteItem from "../FavoriteItem/FavoriteItem";
import type { FavoritesPanelProps } from "../../types/track";
import "./FavoritesPanel.css";

function FavoritesPanel({ tracks }: FavoritesPanelProps) {
  return (
    <aside className="favorites" aria-labelledby="favorites-title">
      <header className="favorites__header">
        <h2 className="favorites__title" id="favorites-title">
          Favoritos
        </h2>
        <span
          className="favorites__count"
          aria-label={`${tracks.length} favoritos`}
        >
          {tracks.length}
        </span>
      </header>

      {tracks.length > 0 ? (
        <ul className="favorites__list">
          {tracks.map((track) => (
            <FavoriteItem
              key={track.id}
              title={track.title}
              artist={track.artist}
              album={track.album}
              genre={track.genre}
              year={track.year}
              cover={track.cover}
            />
          ))}
        </ul>
      ) : (
        <div className="favorites__empty">
        <span className="favorites__icon" aria-hidden="true">
          ♡
        </span>
        <h3 className="favorites__subtitle">
          Guarda tus canciones favoritas
        </h3>
        <p className="favorites__text">
          Haz clic en el corazón de cualquier resultado para añadirlo aquí.
        </p>
        </div>
      )}
    </aside>
  );
}

export default FavoritesPanel;
