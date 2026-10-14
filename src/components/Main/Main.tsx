import "./Main.css";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import TrackList from "../TrackList/TrackList";
import type { Track } from "../../types/track";
import flowersCover from "../../images/covers/flowers.jpg";
import magicCover from "../../images/covers/magic.png";

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
];

function Main() {
  return (
    <main className="main">
      <section className="catalog" aria-label="Catálogo musical">
        <h1>Explora música</h1>
        <CategoryFilter />
        <TrackList tracks={exampleTracks} />
      </section>

      <aside className="favorites" aria-labelledby="favorites-title">
        <h2 id="favorites-title">Favoritos</h2>
      </aside>
    </main>
    
  );
}

export default Main;