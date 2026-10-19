import { useEffect, useRef, useState } from "react";
import type { Track } from "../types/track";

export function useAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const intentoActual = useRef(0);
  const [cancionActiva, setCancionActiva] = useState<Track | null>(null);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [mensajeAudio, setMensajeAudio] = useState("");

  useEffect(() => {
    const audio = audioRef.current;

    return () => {
      audio?.pause();
    };
  }, []);

  async function alternarReproduccion(cancion: Track) {
    const audio = audioRef.current;

    if (!audio || !cancion.previewUrl) {
      setMensajeAudio("Esta canción no tiene un fragmento disponible.");
      return;
    }

    const intento = ++intentoActual.current;
    setMensajeAudio("");

    if (cancionActiva?.id === cancion.id && audio.src === cancion.previewUrl) {
      if (!audio.paused) {
        audio.pause();
        setReproduciendo(false);
        return;
      }
    } else {
      audio.pause();
      setReproduciendo(false);
      setCancionActiva(cancion);
      audio.src = cancion.previewUrl;
    }

    try {
      await audio.play();
    } catch {
      if (intento === intentoActual.current) {
        setReproduciendo(false);
        setMensajeAudio(
          "No se pudo reproducir el fragmento. Comprueba tu conexión e inténtalo de nuevo.",
        );
      }
    }
  }

  function detenerReproduccion() {
    intentoActual.current += 1;
    const audio = audioRef.current;
    audio?.pause();

    if (audio) {
      audio.removeAttribute("src");
      audio.load();
    }

    setReproduciendo(false);
    setCancionActiva(null);
    setMensajeAudio("");
  }

  function confirmarReproduccion() {
    setReproduciendo(true);
  }

  function confirmarPausa() {
    setReproduciendo(false);
  }

  function finalizarReproduccion() {
    setReproduciendo(false);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  }

  function informarErrorAudio() {
    setReproduciendo(false);
    setMensajeAudio(
      "No se pudo cargar el fragmento. Comprueba tu conexión e inténtalo de nuevo.",
    );
  }

  return {
    audioRef,
    cancionActiva,
    reproduciendo,
    mensajeAudio,
    alternarReproduccion,
    detenerReproduccion,
    confirmarReproduccion,
    confirmarPausa,
    finalizarReproduccion,
    informarErrorAudio,
  };
}
