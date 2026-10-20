export type SearchFormProps = {
  alBuscar: (textoBusqueda: string) => void;
};


export type CategoriaBusqueda = "songs" | "albums" | "artists";


export type CategoryFilterProps = {
  categoriaSeleccionada: CategoriaBusqueda;
  alCambiarCategoria: (categoria: CategoriaBusqueda) => void;
};