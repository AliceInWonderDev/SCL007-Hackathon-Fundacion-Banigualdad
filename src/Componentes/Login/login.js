import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { auth, facebookProvider } from '../../FirebaseConfig/provider';
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
            <div className="component">
                <div className="row center">
                    {error ? <p>{error.message}</p> : null}
                </div>
                <div className="row center">
                    <img src="https://raw.githubusercontent.com/VeronicaManchola/SCL007-Hackathon-Fundacion-Banigualdad/master/src/Componentes/Imagenes/VOLANTIN.png" />
                </div>
                <div className="row center">
                    <div className="col-8">
                        <h3 className="welcomeMsg">¡Bienvenido, unete a nuestra comunidad de emprendedores!</h3>
                    </div>
                </div>
                <div className="row center">
                    <div className="col-7">
                        <h4><Link to='./emailLogin' className="btn btn-danger btn-block"><i className="material-icons">email</i> Accede con tu correo</Link></h4>
                    </div>
                </div>
                <div className="row center">
                    <div className="col-7">
                        <button onClick={this.handleSubmit} className="btn btn-primary btn-block"><img src="https://raw.githubusercontent.com/VeronicaManchola/SCL007-Hackathon-Fundacion-Banigualdad/master/src/Componentes/Imagenes/facebook.png" /> Accede con Facebook</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;