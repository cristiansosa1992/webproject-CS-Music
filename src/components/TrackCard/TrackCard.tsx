import { useState } from "react";
import "./TrackCard.css";
import type { TrackCardFavoritosProps } from "../../types/track";

function TrackCard({
  category = "songs",
  title,
  artist,
  album,
  genre,
  year,
  cover,
  previewUrl,
  storeUrl,
  isLiked,
  isPlaying,
  alReproducir,
  alAlternarFavorito,
}: TrackCardFavoritosProps) {
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
                width="20"
                height="20"
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
              className={`track-card__favorite ${
                isLiked ? "track-card__favorite_is-liked" : ""
              }`}
              type="button"
              aria-label={
                isLiked
                  ? `Quitar ${title} de favoritos`
                  : `Agregar ${title} a favoritos`
              }
              aria-pressed={isLiked}
              onClick={alAlternarFavorito}
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
        {category === "songs" && !previewUrl && (
          <p className="track-card__text">Sin fragmento disponible</p>
        )}
        {storeUrl && (
          <a
            className="track-card__store-link"
            href={storeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ver en iTunes
          </a>
        )}
      </div>
    </article>
  );
}

export default TrackCard;
