import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './Componentes/Login/welcome';
import Login from './Componentes/Login/login';
import LoginWithEmail from './Componentes/Login/login_w_email';
import Formulario from './Componentes/Formulario/formulario';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={Welcome} />
            <Route path='/login' component={Login} />
            <Route path='/emailLogin' component={LoginWithEmail} />
            <Route path='/formulario' component={Formulario} />
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
