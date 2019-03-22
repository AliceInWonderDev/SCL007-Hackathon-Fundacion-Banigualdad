import React, { Component } from 'react'
import './Formulario.css'

class Formulario2 extends Component {
    render(){
        return(
            <div className="secondRegisterPage">
                <form>
                    <div className="box">
                        <h5 className="text-center mt-10 mb-10">Selecciona una foto de tu emprendimiento</h5>
                            <a href="#">
                                <i className="material-icons">
                                photo_camera
                                </i>
                            </a>
                    </div>
                    <div className="container">
                        <div className="form-group row">
                            <label  className="label col-md-3 col-form-label text-left">Selecciona una categoría</label>
                            <div className="col-md-9 form-group">
                                <select className="form-control">
                                    <option>Servicio</option>
                                    <option>Producto</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                        <label  className="label col-md-3 col-form-label text-left">Selecciona un tipo de trabajo</label>
                        <div className="col-md-9 form-group">
                            <select className="form-control">
                                <option>Costura</option>
                                <option>Cuidado Infantil</option>
                                <option>Cuidado de personas mayores</option>
                                <option>Venta de Alimentos</option>
                                <option>Carpintería</option>
                            </select>
                        </div>
                        </div>
                        <div className="form-group row">
                            <label  className="label col-md-3 col-form-label text-left">Escriba una descripción de su emprendimiento</label>
                            <div className="col-md-9 form-group">
                                <textarea className="form-control"
                                placeholder="Ejemplo: “Siempre me gustaron las manualidades y decidi utilizar mis habilidades para crear ropa del gusto de todas las personas.
                                Soy una persona responsable y muy detallista”"
                                ></textarea>
                            </div>
                        </div>
                    
                        <button className="continue btn btn-block">Continuar</button>
                    </div>
                </form>
           </div>
        )
    }
}
export default  Formulario2;