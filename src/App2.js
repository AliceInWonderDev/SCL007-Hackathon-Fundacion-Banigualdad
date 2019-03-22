import React, { Component } from 'react';
import { BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import './App.css';
import Welcome from './Componentes/Login/welcome';
import Login from './Componentes/Login/login';
import LoginWithEmail from './Componentes/Login/login_w_email';
import Formulario from './Componentes/Formulario/formulario';
import Formulario2 from './Componentes/Formulario/Formulario2'
import Formulario3 from './Componentes/Formulario/Formulario3'
import Noticias from './Componentes/Noticias/Noticias'
import Catalogo from './Componentes/Catalogo/JS/ProductosVitrina.js'
import Perfil from './Componentes/Perfil Vitrina/perfil'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">       
          <Switch>           
            <Route exact path='/' component={Welcome} />
            <Route path='/login' component={Login} />
            <Route path='/emailLogin' component={LoginWithEmail} />
            <Route path='/formulario' component={Formulario} /> 
            <Route path='/formulario2' component={Formulario2} />
            <Route path='/formulario3' component={Formulario3} />
            <Route path='/noticias' component={Noticias} /> 
            <Route path='/catalogo' component={Catalogo} /> 
            <Route path='/perfil' component={Perfil} />                        
          <Redirect path="*" to="/Welcome"></Redirect>      
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;