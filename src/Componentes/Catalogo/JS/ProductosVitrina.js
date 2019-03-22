import React, { Component } from 'react';
import '../CSS/Productosvitrina.css';
import alice from '../CSS/alice-peailillo.jpg'
import luz from '../CSS/luz-gacita.jpg'
import marianela from '../CSS/marianela-crdova.jpg'
import solange from '../CSS/solange-cspedes.jpg'
import Search from './Search';
import NavbarPag from './../../Navbar/navbar-emp'
import { Link } from 'react-router-dom';

class Catalogo extends Component{
    constructor(props){
        super(props);
        this.state={
            
        };
        this.changeValue = this.changeValue.bind(this);
    }
        render(){
            return(
            <div>
            <NavbarPag/>
            <Search/>
            <div class="row">

            <div className="container">
                <div class="card bg-light mb-3 ml-4 mr-4 mt-4">
                <div class="card-header">Costuras</div>
                <div class="card-body">
                <img alt ="foto"class="rounded-circle imgEMpr" width="160" height="160" src={marianela}/>
                <h5 class="card-title">Marianela Córdova</h5>
                <p class="card-text">Estoy dedicada a los uniformes escolares, trabajo con cuatro colegios, hago las poleras, el pantalón y los buzos.</p>
                <p><button href="#" type="button" class="btn btn-primary">Conocer más</button></p>
                </div>
                </div>
            </div>
            <div className="container">
                <div class="card bg-light mb-3 ml-4 mr-4 mt-4">
                <div class="card-header">Venta de Artículos</div>
                <div class="card-body">
                <img alt ="foto"class="rounded-circle imgEMpr" width="160" height="160" src={solange}/>
                <h5 class="card-title">Solange Céspedes</h5>
                <p class="card-text">La greda es como una terapia para mí. El hecho de trabajarla, de crear, es un arte, es algo magnífico y maravilloso</p>
                <p><Link to="/perfil" type="button" class="btn btn-primary">Conocer más</Link></p>
                </div>
                </div>
            </div>
            <div className="container">
                <div class="card bg-light mb-3 ml-4 mr-4 mt-4">
                <div class="card-header">Venta de Artículos</div>
                <div class="card-body">
                <img alt ="foto"class="rounded-circle imgEMpr" width="160" height="160" src={luz}/>
                <h5 class="card-title">Luz Gacitúa</h5>
                <p class="card-text">Me dedico a vender marcas no testeadas en animales y así aportar con un granito de arena en esta causa.</p>
                <p><button href="#" type="button" class="btn btn-primary">Conocer más</button></p>
                </div>
                </div>
            </div>
           
            <div className="container">
                <div class="card bg-light mb-3 ml-4 mr-4 mt-4">
                <div class="card-header">Productos Naturales</div>
                <div class="card-body">
                <img alt ="foto"class="rounded-circle imgEMpr" width="150" height="150" src={alice}/>
                <h5 class="card-title">Alice Peñailillo</h5>
                <p class="card-text">Llevo 10 años trabajando a través de mis terapias, me he ido especializado, he participado en distintos cursos y talleres, hago terapias de reiki y de sanación.</p>
                <p><button href="#" type="button" class="btn btn-primary">Conocer más</button></p>
                </div>
                </div>
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

export default Catalogo;