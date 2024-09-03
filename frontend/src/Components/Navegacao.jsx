import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import logo from '../Img/logo_branco.png';
import '../CSS/Nav.css';

const Header = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleToggleNavbar = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <header className="shadow-fade">
      <nav className={`navbar navbar-expand-lg navbar-custom fixed-top ${isNavbarExpanded ? 'navbar-expanded' : ''}`}>
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <Image src={logo} width={150} />
          </a>


          {/* Botão de Colapso */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isNavbarExpanded}
            aria-label="Toggle navigation"
            onClick={handleToggleNavbar}  // Função que alterna o estado
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links da Navbar */}
          <div className={`collapse navbar-collapse ${isNavbarExpanded ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contato">Contato</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cadastro">Cadastro</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listaUsuarios">Lista de Usuários</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;