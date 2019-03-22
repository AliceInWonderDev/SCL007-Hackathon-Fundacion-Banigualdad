import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import logoWeb from './logo_web-01 copia.png'
import { /*auth, */facebookProvider } from '../../FirebaseConfig/provider';
import './welcome.css'

class Login extends Component {


    constructor() {
        super();
        this.state = {
            user: null
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        firebase
            .auth()
            .signInWithPopup(facebookProvider)
            .then((result) => {
                let token = result.credential.accessToken;
                // The signed-in user info.
                let user = result.user;
                this.props.history.push("/formulario");
                console.log("logged in with Facebook!")
            })
            .catch((error) => {
                this.setState({ error: error });
            });
    };

    render() {
        const { error } = this.state;
        return (
            <div className="component login">
                <div className="row center">
                    {error ? <p>{error.message}</p> : false}
                </div>
                <div className="row">
                    <img alt="volantin" className="logoweb"src={logoWeb} />
                </div>
                <div className="containerLogin">
                <div className="row center">
                    <div className="col-8">
                        <h3 className="welcomeMsg">¡Bienvenido, unete a nuestra comunidad de emprendedores!</h3>
                    </div>
                </div>
                <div className="row center">
                    <div className="col-7">
                        <h4><Link to='./emailLogin' className="btn btn-danger"><i className="material-icons">email</i> Accede con tu correo</Link></h4>
                    </div>
                </div>
                <div className="row center">
                    <div className="col-7">
                        <button onClick={this.handleSubmit} className="btn btn-primary"><img alt="botonFacebook"src="https://raw.githubusercontent.com/VeronicaManchola/SCL007-Hackathon-Fundacion-Banigualdad/master/src/Componentes/Imagenes/facebook.png" /> Accede con Facebook</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Login;