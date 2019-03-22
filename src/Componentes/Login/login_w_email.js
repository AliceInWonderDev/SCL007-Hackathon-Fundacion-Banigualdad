import React, { Component } from 'react';
import firebase from 'firebase';
import './login_w_email.css'
//import { Link } from 'react-router-dom';
//import { auth, facebookProvider } from '../../FirebaseConfig/provider';

class LoginWithEmail extends Component {

    state = {
        email: '',
        password: '',
        error: null
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.props.history.push('/Noticias');
                console.log("logged in!")
            })
            .catch((error) => {
                this.setState({ error: error });
            });
    };

    render() {
        const { email, password, error } = this.state;
        return (
            <div className="component login">
                <div className="row center">
                {error ? <p>{error.message}</p> : null }
                </div>
                <div className= "formGroup">
                <div className="row center">
                    <label className="textImput" for="inputEmail1">Correo electrónico</label>
                    <input className="divImput" id="inputEmail1" type="email" name="email" value={email} onChange={this.handleInputChange}></input>
                </div>
                <br/>
                <div className="row center">
                    <label className="textImput" for="inputPasword">Contraseña</label>
                    <input className="divImput" id="inputPasword"  type="password" name="password" value={password} onChange={this.handleInputChange}></input>
                </div>
                <br/>
                <div className="row center">
                    <button onClick={this.handleSubmit} className="btn btn-primary">Ingresar</button>
                </div>
                </div>
                <div className="row center error">
                {error ? <p>{error.message}</p> : null }
                </div>
            </div>
        )
    }
}

export default LoginWithEmail;