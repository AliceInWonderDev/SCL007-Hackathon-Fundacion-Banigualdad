import React, { Component } from 'react'
import './Formulario.css'

class Formulario3 extends Component {
    render(){
        return(
            <div className="container">
                <form>
                    <h5 className="mt-4 mb-4">¿Qué tipo de emprendimiento te gustaría conocer?</h5>
                    <p>Te invitamos a que conozcas a otros compañeros emprendedores según tus intereses!</p>
                    <label className="label text-left">Seleccione un rubro</label>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="custom-control-label">
                                Servicio
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" value="" id="defaultCheck2"/>
                            <label className="custom-control-label">
                                Producción
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" value="" id="defaultCheck3"/>
                            <label className="custom-control-label">
                                Comercio
                            </label>
                        </div>
                    </div>
                    <label className="label text-left">Seleccione un rubro</label>
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="custom-control-label">
                                Verdulería
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" value="" id="defaultCheck2"/>
                            <label className="custom-control-label">
                                Venta de Ropa
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" value="" id="defaultCheck3"/>
                            <label className="custom-control-label">
                                Útiles Escolares
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" value="" id="defaultCheck3"/>
                            <label className="custom-control-label">
                                Modista
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" value="" id="defaultCheck3"/>
                            <label className="custom-control-label">
                                Textiles
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" value="" id="defaultCheck3"/>
                            <label className="custom-control-label">
                                Sastre
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" value="" id="defaultCheck3"/>
                            <label className="custom-control-label">
                                Panadería
                            </label>
                        </div>
                    <button className="continue btn btn-block mt-4">Finalizar</button>
                </form>
           </div>
        )
    }
}
export default  Formulario3;