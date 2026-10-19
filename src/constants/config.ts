import type { CategoriaBusqueda } from "../types/search";
export const ITUNES_SEARCH_URL = "https://itunes.apple.com/search";

export const ITUNES_COUNTRY = "CO";

export const ITUNES_SEARCH_LIMIT = 50;

export const RESULTS_PER_PAGE = 10;

export const FAVORITES_STORAGE_KEY = "cs-music:favorites:v1";

export const ITUNES_ENTITIES: Record<CategoriaBusqueda, string> = {
  songs: "song",
  albums: "album",
  artists: "musicArtist",
};
