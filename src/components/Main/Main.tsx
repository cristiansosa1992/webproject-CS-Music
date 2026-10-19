import "./Main.css";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import TrackList from "../TrackList/TrackList";
import FavoritesPanel from "../FavoritesPanel/FavoritesPanel";

import { useState } from "react";
import { RESULTS_PER_PAGE } from "../../constants/config";
import type { CatalogProps } from "../../types/track";

function Main({
  tracks,
  categoriaSeleccionada,
  alCambiarCategoria,
  favoritos,
  alAlternarFavorito,
  alEliminarFavorito,
  cancionEnReproduccion,
  reproduciendo,
  alReproducir,
}: CatalogProps) {
  const [cantidadVisible, setCantidadVisible] = useState(RESULTS_PER_PAGE);

  const cancionesVisibles = tracks.slice(0, cantidadVisible);

  function mostrarMas() {
    setCantidadVisible((cantidadActual) => cantidadActual + RESULTS_PER_PAGE);
  }

  return (
    <main className="main">
      <section className="catalog" aria-label="Catálogo musical">
        <h1>Explora música</h1>
        <CategoryFilter
          categoriaSeleccionada={categoriaSeleccionada}
          alCambiarCategoria={alCambiarCategoria}
        />
        <TrackList
          tracks={cancionesVisibles}
          favoritos={favoritos}
          alAlternarFavorito={alAlternarFavorito}
          cancionEnReproduccion={cancionEnReproduccion}
          reproduciendo={reproduciendo}
          alReproducir={alReproducir}
        />

        {cantidadVisible < tracks.length && (
          <button
            className="catalog__load-more"
            type="button"
            onClick={mostrarMas}
          >
            Cargar más
          </button>
        )}
      </section>

      <FavoritesPanel
        tracks={favoritos}
        alEliminarFavorito={alEliminarFavorito}
        cancionEnReproduccion={cancionEnReproduccion}
        reproduciendo={reproduciendo}
        alReproducir={alReproducir}
      />
    </main>
  );
}

export default Main;
