import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
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
