import React, { Component } from 'react';
import './Navbar.css';

class NavbarPag extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <img className="icon-nav"alt="icono" src="https://raw.githubusercontent.com/marianacarbonell/SCL007-Hackathon-Fundacion-Banigualdad/master/src/Componentes/Imagenes/volantin.png" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-link">
              <a className="nav-link text-white" href="../Catalogo/">Emprendedores <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}
export default NavbarPag;