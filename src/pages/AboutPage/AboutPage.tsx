import "./AboutPage.css";

function AboutPage() {
  return (
    <main className="about">
      <section className="about__content" aria-labelledby="about-title">
        <h1 className="about__title" id="about-title">
          Sobre el autor
        </h1>

        <p className="about__text">
          Soy Cristian, estudiante de desarrollo web en TripleTen.
          CS-Music es mi proyecto final de desarrollo front end.
        </p>

        <h2 className="about__subtitle">Sobre CS-Music</h2>

        <p className="about__text">
          Este proyecto está pensado para explorar canciones, álbumes
          y artistas, escuchar fragmentos musicales y guardar favoritos.
        </p>

        <h2 className="about__subtitle">Tecnologías</h2>

        <ul className="about__technologies">
          <li>React</li>
          <li>TypeScript</li>
          <li>Vite</li>
          <li>React Router</li>
          <li>CSS</li>
        </ul>
      </section>
    </main>
  );
}

export default AboutPage;
