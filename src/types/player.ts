import type { RefObject } from "react";
import type { Track } from "./track";

export type AudioPlayerProps = {
  audioRef: RefObject<HTMLAudioElement | null>;
  cancionActiva: Track | null;
  alReproducir: () => void;
  alPausar: () => void;
  alTerminar: () => void;
  alError: () => void;
  alCerrar: () => void;
};
