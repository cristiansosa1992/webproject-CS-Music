import './CategoryFilter.css';

function CategoryFilter() {
  return (
    <div className="category-filter" role="group" aria-label="Tipo de resultado">
      <button
        className="category-filter__button category-filter__button_active"
        type="button"
        aria-pressed={true}
      >
        Canciones
      </button>

      <button
        className="category-filter__button"
        type="button"
        aria-pressed={false}
      >
        Álbumes
      </button>

      <button
        className="category-filter__button"
        type="button"
        aria-pressed={false}
      >
        Artistas
      </button>
    </div>
  );
}

export default CategoryFilter;