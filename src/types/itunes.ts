export type ItunesSong = {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName?: string;
  primaryGenreName?: string;
  releaseDate?: string;
  artworkUrl100?: string;
  previewUrl?: string;
  trackViewUrl?: string;
};

export type ItunesSearchResponse = {
  resultCount: number;
  results: ItunesSong[];
};




export type ItunesAlbum = {
  wrapperType: "collection";
  collectionId: number;
  collectionName: string;
  artistName: string;
  primaryGenreName?: string;
  releaseDate?: string;
  artworkUrl100?: string;
  collectionViewUrl?: string;
};

export type ItunesArtist = {
  wrapperType: "artist";
  artistId: number;
  artistName: string;
  primaryGenreName?: string;
  artistLinkUrl?: string;
};

export type ItunesResult = ItunesSong | ItunesAlbum | ItunesArtist;

export type ItunesCatalogResponse = {
  resultCount: number;
  results: ItunesResult[];
};