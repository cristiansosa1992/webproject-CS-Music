import Main from "../../components/Main/Main";
import type { CatalogProps } from "../../types/track";

function HomePage({
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
  return (
    <Main
      tracks={tracks}
      categoriaSeleccionada={categoriaSeleccionada}
      alCambiarCategoria={alCambiarCategoria}
      favoritos={favoritos}
      alAlternarFavorito={alAlternarFavorito}
      alEliminarFavorito={alEliminarFavorito}
      cancionEnReproduccion={cancionEnReproduccion}
      reproduciendo={reproduciendo}
      alReproducir={alReproducir}
    />
  );
}

export default HomePage;
