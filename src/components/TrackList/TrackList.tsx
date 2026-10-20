import TrackCard from "../TrackCard/TrackCard";
import type { TrackListFavoritosProps } from "../../types/track";
import "./TrackList.css";

function TrackList({
  tracks,
  favoritos,
  alAlternarFavorito,
  cancionEnReproduccion,
  reproduciendo,
  alReproducir,
}: TrackListFavoritosProps) {
  return (
    <ul className="track-list" aria-label="Resultados musicales">
      {tracks.map((track) => (
        <li
          className="track-list__item"
          key={`${track.category ?? "songs"}-${track.id}`}
        >
          <TrackCard
            category={track.category}
            title={track.title}
            artist={track.artist}
            album={track.album}
            genre={track.genre}
            year={track.year}
            cover={track.cover}
            previewUrl={track.previewUrl}
            storeUrl={track.storeUrl}
            isPlaying={reproduciendo && cancionEnReproduccion === track.id}
            alReproducir={() => alReproducir(track)}
            isLiked={favoritos.some(
              (favorito) => favorito.id === track.id,
            )}
            alAlternarFavorito={() => alAlternarFavorito(track)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TrackList;
