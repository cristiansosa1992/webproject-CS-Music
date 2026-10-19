import { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { buscarCatalogo } from "./utils/itunesApi";
import type { ItunesResult } from "./types/itunes";
import { adaptarResultado } from "./utils/trackMapper";
import type { CategoriaBusqueda } from "./types/search";
import type { Track } from "./types/track";
import { cargarFavoritos, guardarFavoritos } from "./utils/favoritesStorage";
import { useAudioPlayer } from "./hooks/useAudioPlayer";
import "./App.css";

function App() {
  // Guarda canciones, álbumes o artistas recibidos de iTunes.
  const [canciones, setCanciones] = useState<ItunesResult[]>([]);

  const [cargando, setCargando] = useState(false);
  const [mensajeError, setMensajeError] = useState("");
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);
  const [numeroBusqueda, setNumeroBusqueda] = useState(0);

  // Guarda la categoría que utilizaremos al buscar.
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState<CategoriaBusqueda>("songs");

  const ultimaBusqueda = useRef("");
  const solicitudActual = useRef(0);

  const [favoritos, setFavoritos] = useState<Track[]>(cargarFavoritos);
  const [mensajeGuardado, setMensajeGuardado] = useState("");
  const reproductor = useAudioPlayer();

  async function buscarMusica(
    textoBusqueda: string,
    categoria: CategoriaBusqueda = categoriaSeleccionada,
  ) {
    const textoLimpio = textoBusqueda.trim();

    if (!textoLimpio) {
      return;
    }

    ultimaBusqueda.current = textoLimpio;
    const identificadorSolicitud = ++solicitudActual.current;
    // Prepara una búsqueda nueva y reinicia las tarjetas visibles.
    setNumeroBusqueda((numeroActual) => numeroActual + 1);
    setBusquedaRealizada(true);
    setCargando(true);
    setMensajeError("");
    setCanciones([]);

    try {
      // Consulta utilizando el texto y la categoría seleccionada.
      const respuesta = await buscarCatalogo(textoLimpio, categoria);

      if (identificadorSolicitud === solicitudActual.current) {
        setCanciones(respuesta.results);
      }
    } catch {
      if (identificadorSolicitud !== solicitudActual.current) {
        return;
      }

      setMensajeError(
        "Algo salió mal con la solicitud. Puede ser un problema de conexión o del servidor. Inténtalo de nuevo más tarde.",
      );
    } finally {
      if (identificadorSolicitud === solicitudActual.current) {
        setCargando(false);
      }
    }
  }

  function cambiarCategoria(categoria: CategoriaBusqueda) {
    if (categoria === categoriaSeleccionada) {
      return;
    }

    setCategoriaSeleccionada(categoria);

    if (ultimaBusqueda.current) {
      void buscarMusica(ultimaBusqueda.current, categoria);
    }
  }

  // Convierte cada resultado al formato de nuestras tarjetas.
  const resultados = canciones.map(adaptarResultado);

  function alternarFavorito(cancion: Track) {
    if (cancion.category && cancion.category !== "songs") {
      return;
    }

    const yaEsFavorita = favoritos.some(
      (favorito) => favorito.id === cancion.id,
    );

    actualizarFavoritos(
      yaEsFavorita
        ? favoritos.filter((favorito) => favorito.id !== cancion.id)
        : [...favoritos, cancion],
    );
  }

  function actualizarFavoritos(nuevosFavoritos: Track[]) {
    setFavoritos(nuevosFavoritos);
    const guardados = guardarFavoritos(nuevosFavoritos);
    setMensajeGuardado(
      guardados
        ? ""
        : "No se pudieron guardar los favoritos en este navegador. Se conservarán solo mientras la aplicación esté abierta.",
    );
  }

  function eliminarFavorito(idCancion: number) {
    actualizarFavoritos(
      favoritos.filter((favorito) => favorito.id !== idCancion),
    );
  }

  return (
    <div className="page">
      <Header alBuscar={buscarMusica} />

      {mensajeGuardado && <p role="alert">{mensajeGuardado}</p>}
      {reproductor.mensajeAudio && (
        <p role="alert">{reproductor.mensajeAudio}</p>
      )}

      <AudioPlayer
        audioRef={reproductor.audioRef}
        cancionActiva={reproductor.cancionActiva}
        alReproducir={reproductor.confirmarReproduccion}
        alPausar={reproductor.confirmarPausa}
        alTerminar={reproductor.finalizarReproduccion}
        alError={reproductor.informarErrorAudio}
        alCerrar={reproductor.detenerReproduccion}
      />

      {cargando && <p role="status">Cargando...</p>}

      {mensajeError && <p role="alert">{mensajeError}</p>}

      {busquedaRealizada &&
        !cargando &&
        !mensajeError &&
        canciones.length === 0 && <p role="status">No se encontró nada</p>}

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              key={numeroBusqueda}
              tracks={resultados}
              categoriaSeleccionada={categoriaSeleccionada}
              alCambiarCategoria={cambiarCategoria}
              favoritos={favoritos}
              alAlternarFavorito={alternarFavorito}
              alEliminarFavorito={eliminarFavorito}
              cancionEnReproduccion={reproductor.cancionActiva?.id ?? null}
              reproduciendo={reproductor.reproduciendo}
              alReproducir={reproductor.alternarReproduccion}
            />
          }
        />

        <Route path="/about" element={<AboutPage />} />

        <Route
          path="*"
          element={
            <main>
              <h1>404 — Página no encontrada</h1>
              <p>La dirección que buscas no existe.</p>
            </main>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
