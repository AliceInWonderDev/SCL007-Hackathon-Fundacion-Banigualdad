import React, { Component } from 'react';


class Search extends Component{
    render(){
        return(
        <div>
            <div className="btn-group ml-4 mr-4 mt-4">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                    Buscar por rubro
                </button>
                <div className="dropdown-menu dropdown-menu-lg-right">
                    <button className="dropdown-item" type="button">Pproducción</button>
                    <button className="dropdown-item" type="button">Servicios</button>
                    <button className="dropdown-item" type="button">Comercio</button>
                    </div>
            </div>
            <div className="btn-group ml-4 mr-4 mt-4">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                        Buscar por categoría
                    </button>
                    <div className="dropdown-menu dropdown-menu-lg-right">
                        <button className="dropdown-item" type="button">Manualidades</button>
                        <button className="dropdown-item" type="button">Productos Naturales</button>
                        <button className="dropdown-item" type="button">Costuras</button>
                        <button className="dropdown-item" type="button">Alimentos</button>
                        <button className="dropdown-item" type="button">Venta de Artículos</button>
                        </div>
            </div>
        </div>
        )
    }
}
export default Search;