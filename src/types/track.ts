import type { CategoriaBusqueda, CategoryFilterProps } from "./search";

export type TrackCardProps = {
  category?: CategoriaBusqueda;
  title: string;
  artist: string;
  album: string;
  genre: string;
  year: number;
  cover: string;

  
};
export type Track = TrackCardProps & {
  id: number;
};

export type TrackListProps = {
  tracks: Track[];
};

export type CatalogProps = TrackListProps & CategoryFilterProps;

export type FavoritesPanelProps = {
  tracks: Track[];
};
