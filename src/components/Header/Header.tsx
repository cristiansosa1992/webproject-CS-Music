import { Link, NavLink } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/" aria-label="CS-Music, ir al inicio">
        <img
          className="header__logo-mark"
          src={`${import.meta.env.BASE_URL}logo-mark.svg`}
          alt=""
          width="44"
          height="44"
        />
        <span className="header__logo-name" aria-hidden="true">
          CS<span className="header__logo-accent">Music</span>
        </span>
      </Link>

      <div className="header__search">
        <SearchForm />
      </div>

      <nav className="header__nav" aria-label="Navegación principal">
        <NavLink className="header__link" to="/" end>
          Inicio
        </NavLink>
        <NavLink className="header__link" to="/about">
          Sobre el autor
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
