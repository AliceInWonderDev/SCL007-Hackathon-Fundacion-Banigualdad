import React, { Component } from 'react';
import ProductosVitrina from './Componentes/Catalogo/JS/ProductosVitrina';
import '../src/App.css';
import Search from './Componentes/Catalogo/JS/Search';
import Emprendedores from './Component/';
import PerfilPage from './Componentes/Perfil Vitrina/perfil.js'

class App extends Component {
  render() {
    return (
    <div>
      <div className="App">
        <Search/> 
      <header className="App-header">
        <div>
          <ProductosVitrina/>
        </div>
      </header>
      </div>
      <PerfilPage/>
    </div>
    );
  }
}

export default App;
