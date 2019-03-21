import React, { Component } from 'react';
import '../CSS/Productosvitrina.css';

class ProductosVitrina extends Component{
    constructor(props){
        super(props);
        this.state={
            
        };
        this.changeValue = this.changeValue.bind(this);
    }
        render(){
            return(
            <div>
            <div class="row">
                <div class="col-md-4 ">
                    <img class="rounded-circle imgEMpr" width="240" height="240" src="https://www.banigualdad.cl/wp-content/uploads/2018/03/marianela-crdova.jpg"/>
                    <h2>Marianela Córdova</h2>
                    <button type="button" class="btn btn-outline-primary">Costuras</button>
                    <p>Estoy dedicada a los uniformes escolares, trabajo con cuatro colegios, hago las poleras, el pantalón y los buzos.</p>
                    <p><button href="#" type="button" class="btn btn-primary">Ver más</button></p>
                </div>   
            
            
                <div class="col-md-4">
                    <img class="rounded-circle imgEMpr" width="240" height="240" src="https://www.banigualdad.cl/wp-content/uploads/2018/01/luz-gacita.jpg"/>
                    <h2>Luz Gacitúa</h2>
                    <button type="button" class="btn btn-outline-primary">Venta de Artículos</button>
                    <p>Me dedico a vender marcas no testeadas en animales y así aportar con un granito de arena en esta causa.</p>
                    <p><button href="#" type="button" class="btn btn-primary">Ver más</button></p>
                </div>   
            
            
                <div class="col-md-4">
                    <img class="rounded-circle imgEMpr" width="240" height="240" src="https://www.banigualdad.cl/wp-content/uploads/2018/06/alice-peailillo.jpg"/>
                    <h2>Alice Peñailillo</h2>
                    <button type="button" class="btn btn-outline-primary">Productos Naturales</button>
                    <p>Llevo 10 años trabajando a través de mis terapias, me he ido especializado, he participado en distintos cursos y talleres, hago terapias de reiki y de sanación.</p>
                    <p><button href="#" type="button" class="btn btn-primary">Ver más</button></p>
                </div>   
            </div>
        </div>
            )
        }
        changeValue = (e)=>{
            this.setState({
                name: e.target.value,
                text: e.target.value
            })
        }
}

export default ProductosVitrina;