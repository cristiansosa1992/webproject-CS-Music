import { useState } from "react";
import "./TrackCard.css";
import type { TrackCardProps } from "../../types/track";

function TrackCard({
  category = "songs",
  title,
  artist,
  album,
  genre,
  year,
  cover,
}: TrackCardProps) {
  const [portadaFallida, setPortadaFallida] = useState<string | null>(null);

  return (
    <article className="track-card">
      <div className="track-card__artwork">
        {cover && portadaFallida !== cover ? (
          <img
            className="track-card__cover"
            src={cover}
            alt={`Portada de ${album || title}`}
            onError={() => setPortadaFallida(cover)}
          />
        ) : (
          <div
            className="track-card__placeholder"
            role="img"
            aria-label={`Imagen no disponible de ${title}`}
          >
            {category === "artists" ? "Artista sin imagen" : "Sin portada"}
          </div>
        )}

        {category === "songs" && (
          <>
        <button
          className="track-card__play"
          type="button"
          aria-label={`Reproducir ${title}`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M8 5v14l11-7Z" />
          </svg>
        </button>

        <button
          className="track-card__favorite"
          type="button"
          aria-label={`Agregar ${title} a favoritos`}
          aria-pressed={false}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
          </svg>
        </button>
          </>
        )}
      </div>

      <div className="track-card__info">
        <h2 className="track-card__title">{title}</h2>
        <p className="track-card__text">{artist}</p>
        {album && <p className="track-card__text">{album}</p>}
        <p className="track-card__text">
          {genre}
          {year > 0 && ` · ${year}`}
        </p>
      </div>
    </article>
  );
}

export default TrackCard;
