import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logoweb from '../Login/logo_web-01 copia.png'
class NavbarEmp extends Component {
  

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/catalogo"><img className="icon-nav" alt="volantin"src={logoweb}/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-link">
                            <Link className="nav-link text-white" to="./Catalogo/">Catálogo</Link>
                        </li>
                        <li className="nav-link">
                            <Link className="nav-link text-white" to="./Formulario">Editar Perfil </Link>
                        </li>
                        <li className="nav-link">
                            <Link className="nav-link text-white" to="./Login">Cerrar Sesión</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}
export default NavbarEmp;