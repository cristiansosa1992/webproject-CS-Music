import type { AudioPlayerProps } from "../../types/player";
import "./AudioPlayer.css";

function AudioPlayer({
  audioRef,
  cancionActiva,
  alReproducir,
  alPausar,
  alTerminar,
  alError,
  alCerrar,
}: AudioPlayerProps) {
  return (
    <section
      className="audio-player"
      aria-label="Reproductor de fragmentos"
      hidden={!cancionActiva}
    >
      <div className="audio-player__info">
        <p className="audio-player__title" aria-live="polite">
          {cancionActiva?.title} — {cancionActiva?.artist}
        </p>
        <p className="audio-player__credit">
          Fragmento proporcionado por iTunes.
        </p>
        {cancionActiva?.storeUrl && (
          <a href={cancionActiva.storeUrl} target="_blank" rel="noreferrer">
            <img
              className="audio-player__badge"
              src={`${import.meta.env.BASE_URL}itunes-store-badge.png`}
              alt="Ver canción completa en iTunes Store"
              height="40"
            />
          </a>
        )}
      </div>
      <audio
        ref={audioRef}
        className="audio-player__controls"
        aria-label="Controles del fragmento musical"
        controls
        preload="none"
        onPlay={alReproducir}
        onPause={alPausar}
        onEnded={alTerminar}
        onError={alError}
      />
      <button className="audio-player__close" type="button" onClick={alCerrar}>
        Cerrar reproductor
      </button>
    </section>
  );
}

export default AudioPlayer;
