import type { ItunesSong, ItunesResult } from "../types/itunes";
import type { Track } from "../types/track";

export function adaptarCancion(cancion: ItunesSong): Track {
  const fecha = new Date(cancion.releaseDate ?? "");
  const anio = fecha.getUTCFullYear();

  return {
    category: "songs",
    id: cancion.trackId,
    title: cancion.trackName,
    artist: cancion.artistName,
    album: cancion.collectionName ?? "Álbum desconocido",
    genre: cancion.primaryGenreName ?? "Género desconocido",
    year: Number.isNaN(anio) ? 0 : anio,
    cover: cancion.artworkUrl100 ?? "",
  };
}

export function adaptarResultado(resultado: ItunesResult): Track {
  if ("trackId" in resultado) {
    return adaptarCancion(resultado);
  }

  if ("collectionId" in resultado) {
    const album = adaptarCancion({
      trackId: resultado.collectionId,
      trackName: resultado.collectionName,
      artistName: resultado.artistName,
      collectionName: resultado.collectionName,
      primaryGenreName: resultado.primaryGenreName,
      releaseDate: resultado.releaseDate,
      artworkUrl100: resultado.artworkUrl100,
    });

    return { ...album, category: "albums" };
  }

  return {
    category: "artists",
    id: resultado.artistId,
    title: resultado.artistName,
    artist: "Artista",
    album: "",
    genre: resultado.primaryGenreName ?? "Género desconocido",
    year: 0,
    cover: "",
  };
}
