import {
  ITUNES_SEARCH_URL,
  ITUNES_COUNTRY,
  ITUNES_SEARCH_LIMIT,
  ITUNES_ENTITIES,
} from "../constants/config";
import type { CategoriaBusqueda } from "../types/search";
import type { ItunesCatalogResponse } from "../types/itunes";

export async function buscarCatalogo(
  textoBusqueda: string,
  categoria: CategoriaBusqueda,
): Promise<ItunesCatalogResponse> {
  const url = new URL(ITUNES_SEARCH_URL);

  url.searchParams.set("term", textoBusqueda.trim());
  url.searchParams.set("country", ITUNES_COUNTRY);
  url.searchParams.set("media", "music");
  url.searchParams.set("entity", ITUNES_ENTITIES[categoria]);
  url.searchParams.set("limit", String(ITUNES_SEARCH_LIMIT));

  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error(`Error de iTunes: ${respuesta.status}`);
  }

  const datos: ItunesCatalogResponse = await respuesta.json();

  return datos;
}
