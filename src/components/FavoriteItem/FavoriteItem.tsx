import type { TrackCardProps } from "../../types/track";
import "./FavoriteItem.css";

function FavoriteItem({ title, artist, album, cover }: TrackCardProps) {
  return (
    <li className="favorite-item">
      <img
        className="favorite-item__cover"
        src={cover}
        alt={`Portada de ${album}`}
      />

      <div className="favorite-item__info">
        <h3 className="favorite-item__title">{title}</h3>
        <p className="favorite-item__text">{artist}</p>
        <p className="favorite-item__text">{album}</p>
      </div>

      <button
        className="favorite-item__button"
        type="button"
        aria-label={`Reproducir ${title}`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M8 5v14l11-7Z" />
        </svg>
      </button>

      <button
        className="favorite-item__button"
        type="button"
        aria-label={`Eliminar ${title} de favoritos`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6" />
        </svg>
      </button>
    </li>
  );
}

export default FavoriteItem;
