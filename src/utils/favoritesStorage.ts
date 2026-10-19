import { FAVORITES_STORAGE_KEY } from "../constants/config";
import type { Track } from "../types/track";

function esUrlWeb(valor: unknown): valor is string {
  if (typeof valor !== "string") {
    return false;
  }

  try {
    const url = new URL(valor);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function esFavorito(valor: unknown): valor is Track {
  if (typeof valor !== "object" || valor === null) {
    return false;
  }

  const cancion = valor as Record<string, unknown>;

  return (
    typeof cancion.id === "number" &&
    Number.isSafeInteger(cancion.id) &&
    cancion.id > 0 &&
    (cancion.category === undefined || cancion.category === "songs") &&
    typeof cancion.title === "string" &&
    typeof cancion.artist === "string" &&
    typeof cancion.album === "string" &&
    typeof cancion.genre === "string" &&
    typeof cancion.year === "number" &&
    Number.isFinite(cancion.year) &&
    typeof cancion.cover === "string" &&
    (cancion.cover === "" || esUrlWeb(cancion.cover)) &&
    (cancion.previewUrl === undefined || esUrlWeb(cancion.previewUrl)) &&
    (cancion.storeUrl === undefined || esUrlWeb(cancion.storeUrl))
  );
}

export function cargarFavoritos(): Track[] {
  try {
    const contenido = localStorage.getItem(FAVORITES_STORAGE_KEY);

    if (!contenido) {
      return [];
    }

    const datos: unknown = JSON.parse(contenido);

    if (!Array.isArray(datos)) {
      return [];
    }

    const identificadores = new Set<number>();

    return datos.filter((dato): dato is Track => {
      if (!esFavorito(dato) || identificadores.has(dato.id)) {
        return false;
      }

      identificadores.add(dato.id);
      return true;
    });
  } catch {
    return [];
  }
}

export function guardarFavoritos(favoritos: Track[]): boolean {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoritos));
    return true;
  } catch {
    return false;
  }
}
