import React, { Component } from 'react'
import './Formulario.css'
import { Link } from 'react-router-dom';
import fotoDefault from './default-user.png'
import NavbarPag from '../Navbar/navbar-emp'


class Formulario extends Component {

   render(){
        return(
            <div className="container">
                <NavbarPag/>
                <h4 className="mt-4 mb-4">Crea tu perfil</h4>
                <form>
                    <div className="profilePicture">
                        <img className="picturePerfil" src={fotoDefault} alt="profilePicture" />

                    </div>
                    <div className="form-group row">
                        <label  className="label col-md-3 col-form-label text-left">¿Cuál es su nombre?</label>
                        <div className="col-md-9 form-group">
                                <input type="text" className="form-control" placeholder="Ejemplo. María Campos"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="label col-md-3 col-form-label text-left">Indique su número de teléfono</label>
                        <div className="col-md-9 form-group">
                            <input type="text" className="form-control" placeholder="+56 9 1234 5678"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="label col-md-3 col-form-label text-left">Nombre de su emprendimiento</label>
                        <div className="col-md-9 form-group">
                            <input type="text" className="form-control" placeholder="Costuras de Doña María"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="label col-md-3 col-form-label text-left">Nacimiento de su emprendimiento</label>
                        <div className="col-md-9 form-group">
                            <select className="form-control">
                                <option>2000 - 2003</option>
                                <option>2004 - 2007</option>
                                <option>2008 - 2011</option>
                                <option>2012 - 2015</option>
                                <option>2016 - 2019</option>
                            </select>
                        </div>
                    </div>
                    <Link to="/Formulario2" className="continue btn btn-block">Continuar</Link>
                </form>
           </div>
        )
    }
}
export default Formulario;