import './SearchForm.css';

function SearchForm() {
  return (
    <form
      className="search"
      role="search"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        className="search__input"
        type="search"
        name="query"
        placeholder="Busca canciones, artistas o álbumes"
        aria-label="Busca canciones, artistas o álbumes"
      />
      <button className="search__button" type="submit">
        Buscar música
      </button>
    </form>
  );
}

export default SearchForm;