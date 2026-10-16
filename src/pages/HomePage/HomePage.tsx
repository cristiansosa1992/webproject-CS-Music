import Main from "../../components/Main/Main";
import type { CatalogProps } from "../../types/track";

function HomePage({
  tracks,
  categoriaSeleccionada,
  alCambiarCategoria,
}: CatalogProps) {
  return (
    <Main
      tracks={tracks}
      categoriaSeleccionada={categoriaSeleccionada}
      alCambiarCategoria={alCambiarCategoria}
    />
  );
}

export default HomePage;