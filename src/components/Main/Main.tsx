import "./Main.css";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import TrackList from "../TrackList/TrackList";
import type { Track } from "../../types/track";
import flowersCover from "../../images/covers/flowers.jpg";
import magicCover from "../../images/covers/magic.png";
import FavoritesPanel from "../FavoritesPanel/FavoritesPanel";

const exampleTracks: Track[] = [
  {
    id: 1,
    title: "Flowers",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
    genre: "Pop",
    year: 2023,
    cover: flowersCover,
  },
  {
    id: 2,
    title: "Magic",
    artist: "The Wink",
    album: "The wink",
    genre: "rock",
    year: 2026,
    cover: magicCover,
  },
   {
    id: 3,
    title: "Flowers",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
    genre: "Pop",
    year: 2023,
    cover: flowersCover,
  },
  {
    id: 4,
    title: "Magic",
    artist: "The Wink",
    album: "The wink",
    genre: "rock",
    year: 2026,
    cover: magicCover,
  },
   {
    id: 5,
    title: "Flowers",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
    genre: "Pop",
    year: 2023,
    cover: flowersCover,
  },
  {
    id: 6,
    title: "Magic",
    artist: "The Wink",
    album: "The wink",
    genre: "rock",
    year: 2026,
    cover: magicCover,
  },
   {
    id: 7,
    title: "Flowers",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
    genre: "Pop",
    year: 2023,
    cover: flowersCover,
  },
  {
    id: 8,
    title: "Magic",
    artist: "The Wink",
    album: "The wink",
    genre: "rock",
    year: 2026,
    cover: magicCover,
  },
   {
    id: 9,
    title: "Flowers",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
    genre: "Pop",
    year: 2023,
    cover: flowersCover,
  },
  {
    id: 10,
    title: "Magic",
    artist: "The Wink",
    album: "The wink",
    genre: "rock",
    year: 2026,
    cover: magicCover,
  },
]

  const favoriteTracks: Track[] = [
  {
    id: 1,
    title: "Flowers",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
    genre: "Pop",
    year: 2023,
    cover: flowersCover,
  },
   {
    id: 10,
    title: "Magic",
    artist: "The Wink",
    album: "The wink",
    genre: "rock",
    year: 2026,
    cover: magicCover,
  },
];

function Main() {
  return (
    <main className="main">
      <section className="catalog" aria-label="Catálogo musical">
        <h1>Explora música</h1>
        <CategoryFilter />
        <TrackList tracks={exampleTracks} />

        <button className="catalog__load-more" type="button">
          Cargar más
        </button>
      </section>

      <FavoritesPanel tracks={favoriteTracks} />
    </main>
  );
}

export default Main;
