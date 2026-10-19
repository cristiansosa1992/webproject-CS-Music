import { useState } from "react";
import type { FavoriteItemProps } from "../../types/track";
import "./FavoriteItem.css";

function FavoriteItem({
  title,
  artist,
  album,
  cover,
  previewUrl,
  storeUrl,
  isPlaying,
  alReproducir,
  alEliminar,
}: FavoriteItemProps) {
  const [portadaFallida, setPortadaFallida] = useState<string | null>(null);

  return (
    <li className="favorite-item">
      {cover && portadaFallida !== cover ? (
        <img
          className="favorite-item__cover"
          src={cover}
          alt={`Portada de ${album || title}`}
          onError={() => setPortadaFallida(cover)}
        />
      ) : (
        <span className="favorite-item__placeholder" aria-label="Sin portada">
          ♪
        </span>
      )}

      <div className="favorite-item__info">
        <h3 className="favorite-item__title">{title}</h3>
        <p className="favorite-item__text">{artist}</p>
        <p className="favorite-item__text">{album}</p>
        {storeUrl && (
          <a
            className="favorite-item__store-link"
            href={storeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ver en iTunes
          </a>
        )}
      </div>

      <button
        className="favorite-item__button"
        type="button"
        aria-label={
          !previewUrl
            ? `Fragmento no disponible de ${title}`
            : `${isPlaying ? "Pausar" : "Reproducir"} ${title}`
        }
        aria-pressed={isPlaying}
        disabled={!previewUrl}
        onClick={alReproducir}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          {isPlaying ? (
            <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
          ) : (
            <path d="M8 5v14l11-7Z" />
          )}
        </svg>
      </button>

      <button
        className="favorite-item__button"
        type="button"
        aria-label={`Eliminar ${title} de favoritos`}
        onClick={alEliminar}
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
