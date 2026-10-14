import { Link, NavLink } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        CS-Music
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
