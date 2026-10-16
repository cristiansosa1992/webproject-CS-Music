import "./CategoryFilter.css";
import type { CategoryFilterProps } from "../../types/search";

function CategoryFilter({
  categoriaSeleccionada,
  alCambiarCategoria,
}: CategoryFilterProps) {
  return (
    <div
      className="category-filter"
      role="group"
      aria-label="Tipo de resultado"
    >
      <button
        className={`category-filter__button ${
          categoriaSeleccionada === "songs"
            ? "category-filter__button_active"
            : ""
        }`}
        type="button"
        aria-pressed={categoriaSeleccionada === "songs"}
        onClick={() => alCambiarCategoria("songs")}
      >
        Canciones
      </button>

      <button
        className={`category-filter__button ${
          categoriaSeleccionada === "albums"
            ? "category-filter__button_active"
            : ""
        }`}
        type="button"
        aria-pressed={categoriaSeleccionada === "albums"}
        onClick={() => alCambiarCategoria("albums")}
      >
        Álbumes
      </button>

      <button
        className={`category-filter__button ${
          categoriaSeleccionada === "artists"
            ? "category-filter__button_active"
            : ""
        }`}
        type="button"
        aria-pressed={categoriaSeleccionada === "artists"}
        onClick={() => alCambiarCategoria("artists")}
      >
        Artistas
      </button>
    </div>
  );
}

export default CategoryFilter;