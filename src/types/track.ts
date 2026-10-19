import type { CategoriaBusqueda, CategoryFilterProps } from "./search";

export type TrackCardProps = {
  category?: CategoriaBusqueda;
  title: string;
  artist: string;
  album: string;
  genre: string;
  year: number;
  cover: string;
  previewUrl?: string;
  storeUrl?: string;
};

export type TrackLike = {
  isLiked: boolean;
};

export type Track = TrackCardProps & {
  id: number;
};

export type TrackListProps = {
  tracks: Track[];
};

export type CatalogProps =
  TrackListProps &
  CategoryFilterProps &
  FavoritosProps &
  PlaybackProps;

export type PlaybackProps = {
  cancionEnReproduccion: number | null;
  reproduciendo: boolean;
  alReproducir: (cancion: Track) => void;
};

export type PlayButtonProps = {
  isPlaying: boolean;
  alReproducir: () => void;
};

export type FavoritesPanelProps = PlaybackProps & {
  tracks: Track[];
  alEliminarFavorito: (idCancion: number) => void;
};
export type FavoritosProps = {
  favoritos: Track[];
  alAlternarFavorito: (cancion: Track) => void;
  alEliminarFavorito: (idCancion: number) => void;
};
export type TrackListFavoritosProps =
  TrackListProps &
  PlaybackProps &
  Pick<FavoritosProps, "favoritos" | "alAlternarFavorito">;

export type TrackCardFavoritosProps = TrackCardProps &
  TrackLike & PlayButtonProps & {
    alAlternarFavorito: () => void;
  };

export type FavoriteItemProps = TrackCardProps & PlayButtonProps & {
  alEliminar: () => void;
};
