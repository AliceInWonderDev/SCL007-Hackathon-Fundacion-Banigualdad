import React, { Component } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { auth, facebookProvider } from '../../FirebaseConfig/provider';

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
                this.props.history.push('/');
                console.log("logged in!")
            })
            .catch((error) => {
                this.setState({ error: error });
            });
    };

    render() {
        const { email, password, error } = this.state;
        return (
            <div className="component">
                <div className="row center">
                {error ? <p>{error.message}</p> : null }
                </div>
                <div className="row center">
                    <input type="email" name="email" placeholder="Correo electrónico" value={email} onChange={this.handleInputChange}></input>
                </div>
                <div className="row center">
                    <input type="password" name="password" placeholder="Contraseña" value={password} onChange={this.handleInputChange}></input>
                </div>
                <div className="row center">
                    <button onClick={this.handleSubmit}>Ingresar</button>
                </div>
            </div>
        )
    }
}

export default LoginWithEmail;