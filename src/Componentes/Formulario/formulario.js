import React, { Component } from 'react'
import './Formulario.css'

class Formulario extends Component {
    render(){
        return(
            <div className="container">
                <h4 className="mt-4 mb-4">Crea tu perfil</h4>
                <form>
                    <div className="profilePicture">
                        <img src="http://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png" alt="profilePicture" />

                    </div>
                    <div className="form-group row">
                        <label  className="col-md-3 col-form-label text-left">¿Cuál es su nombre?</label>
                        <div className="col-md-9 form-group">
                                <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-md-3 col-form-label text-left">Indique su número de teléfono</label>
                        <div className="col-md-9 form-group">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-md-3 col-form-label text-left">Nombre de su emprendimiento</label>
                        <div className="col-md-9 form-group">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-md-3 col-form-label text-left">Nacimiento de su emprendimiento</label>
                        <div className="col-md-9 form-group">
                            <select className="form-control">
                                <option>2000 - 2003</option>
                                <option>2004 - 2007</option>
                                <option>2008 - 2011</option>
                                <option>2012 - 2015</option>
                                <option>2016 - 2019</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="continue btn btn-block">Continuar</button>
                </form>
           </div>
        )
    }
}
export default Formulario;