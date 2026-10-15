import "./CategoryFilter.css";
import { useState } from "react";

function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("songs");
  return (
    <div
      className="category-filter"
      role="group"
      aria-label="Tipo de resultado"
    >
      <button
        className={`category-filter__button ${
          selectedCategory === "songs" ? "category-filter__button_active" : ""
        }`}
        type="button"
        aria-pressed={selectedCategory === "songs"}
        onClick={() => setSelectedCategory("songs")}
      >
        Canciones
      </button>

      <button
        className={`category-filter__button ${
          selectedCategory === "albums" ? "category-filter__button_active" : ""
        }`}
        type="button"
        aria-pressed={selectedCategory === "albums"}
        onClick={() => setSelectedCategory("albums")}
      >
        Álbumes
      </button>

      <button
        className={`category-filter__button ${
          selectedCategory === "artists" ? "category-filter__button_active" : ""
        }`}
        type="button"
        aria-pressed={selectedCategory === "artists"}
        onClick={() => setSelectedCategory("artists")}
      >
        Artistas
      </button>
    </div>
  );
}

export default CategoryFilter;
