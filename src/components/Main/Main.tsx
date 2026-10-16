import "./Main.css";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import TrackList from "../TrackList/TrackList";
import FavoritesPanel from "../FavoritesPanel/FavoritesPanel";

import flowersCover from "../../images/covers/flowers.jpg";
import magicCover from "../../images/covers/magic.png";
import { useState } from "react";
import { RESULTS_PER_PAGE } from "../../constants/config";
import type { Track, CatalogProps } from "../../types/track";
const favoriteTracks: Track[] = [
  {
    id: 1,
    title: "Flowers",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
    genre: "Pop",
    year: 2023,
    cover: flowersCover,
  },
  {
    id: 10,
    title: "Magic",
    artist: "The Wink",
    album: "The wink",
    genre: "rock",
    year: 2026,
    cover: magicCover,
  },
];

function Main({
  tracks,
  categoriaSeleccionada,
  alCambiarCategoria,
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
        <TrackList tracks={cancionesVisibles} />

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

      <FavoritesPanel tracks={favoriteTracks} />
    </main>
  );
}

export default Main;
