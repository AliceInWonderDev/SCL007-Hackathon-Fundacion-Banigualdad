import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase'
import './welcome.css'

class Welcome extends Component {

    constructor() {
        super();
        this.state = {
            user: null
        }
    }

    handleClick = () => {
        this.props.history.push("./login");
    }

    render() {
        return (
            <div className="component">
                {this.state.isSignedIn ? <Link to="/navbar"></Link> : console.log('not logged in')}

                <div className="component">
                    <div className="row center"> 
                        <img className="mainLogo" src="https://raw.githubusercontent.com/VeronicaManchola/SCL007-Hackathon-Fundacion-Banigualdad/master/src/Componentes/Imagenes/logo_banigualdad.png" />
                    </div>
                </div>

                <div className="row center">
                    <div className="col-6">
                        <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModalLong">
                            Soy de Banigualdad
                        </button>
                    </div>
                </div>

                <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            Esta sección solo se encuentra disponible para los emprendedores que son integrantes de la fundación BanIgualdad, toda aquella persona que se registre y no sea parte de la fundación sera eliminada su cuenta. 
                        </div>
                            <div className="modal-footer">
                                <button onClick={this.handleClick} className="btn btn-primary" data-dismiss="modal">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row center">
                    <div className="col-6">
                    <h4><Link to="/catalogo" className="btn btn-outline-primary btn-block">Vengo a conocer</Link></h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;