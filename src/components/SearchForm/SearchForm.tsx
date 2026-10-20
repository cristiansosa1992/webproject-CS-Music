import { useState } from "react";
import type { SearchFormProps } from "../../types/search";
import "./SearchForm.css";

function SearchForm({ alBuscar }: SearchFormProps) {
  const [textoBusqueda, setTextoBusqueda] = useState("");

  return (
    <form
      className="search"
      role="search"
      onSubmit={(event) => {
        event.preventDefault();

        const textoLimpio = textoBusqueda.trim();

        if (!textoLimpio) {
          return;
        }

        alBuscar(textoLimpio);
      }}
    >
      <input
        className="search__input"
        type="search"
        name="query"
        placeholder="Busca canciones, artistas o álbumes"
        aria-label="Busca canciones, artistas o álbumes"
        value={textoBusqueda}
        onChange={(event) => setTextoBusqueda(event.target.value)}
        required
      />

      <button className="search__button" type="submit">
        Buscar música
      </button>
    </form>
  );
}

export default SearchForm;