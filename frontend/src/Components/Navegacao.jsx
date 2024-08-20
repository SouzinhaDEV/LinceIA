import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from "react-bootstrap";
import logo from '../Img/logo_branco.png';
import '../CSS/Nav.css'

const Header = () => {
  return (
      <header class="shadow-fade">
        <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#"><Image src={logo} width={150} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
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