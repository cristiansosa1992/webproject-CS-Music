import TrackCard from '../TrackCard/TrackCard';
import type { TrackListProps } from '../../types/track';
import './TrackList.css';

function TrackList({ tracks }: TrackListProps) {
  return (
    <ul className="track-list" aria-label="Resultados musicales">
      {tracks.map((track) => (
        <li className="track-list__item" key={track.id}>
          <TrackCard
            title={track.title}
            artist={track.artist}
            album={track.album}
            genre={track.genre}
            year={track.year}
            cover={track.cover}
            
          />
        </li>
      ))}
    </ul>
  );
}

export default TrackList;