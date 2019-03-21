import React, { Component } from 'react';
import ProductosVitrina from './Componentes/Catalogo/JS/ProductosVitrina';
import './App.css';
import Search from './Componentes/Catalogo/JS/Search';
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
