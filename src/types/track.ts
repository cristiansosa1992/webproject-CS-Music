export type TrackCardProps = {
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