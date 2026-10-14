import './TrackCard.css';
import type { TrackCardProps } from '../../types/track';


function TrackCard({
  title,
  artist,
  album,
  genre,
  year,
  cover,
  
}: TrackCardProps) {
  return (
    <article className="track-card">
      <div className="track-card__artwork">
        <img
          className="track-card__cover"
          src={cover}
          alt={`Portada de ${album}`}
        />

        <button
          className="track-card__play"
          type="button"
          aria-label={`Reproducir ${title}`}
        >
          ▶
        </button>

        <button
          className="track-card__favorite"
          type="button"
          aria-label={`Agregar ${title} a favoritos`}
          aria-pressed={false}
        >
          ♡
        </button>
      </div>

      <div className="track-card__info">
        <h2 className="track-card__title">{title}</h2>
        <p className="track-card__text">{artist}</p>
        <p className="track-card__text">{album}</p>
        <p className="track-card__text">
          {genre} · {year}
        </p>
        
      </div>
    </article>
  );
}

export default TrackCard;