import React, {Component} from 'react'
import './perfil.css'
import vasos from './imagenes/JUE_vin_01-600x600.jpg'
import olla from './imagenes/OLL_arr_03-600x600.jpg'
import sarten from './imagenes/SAR_gre-600x600.jpg'
import copas from './imagenes/SET_cop_01-600x600.jpg'
import NavbarPag from '../Navbar/navbar-emp'


class PerfilPage extends Component {

render() {

    return (
    <div>
      <NavbarPag/>  
    <div class="container">              
        <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark about">
            <div class="col-md-6 px-0 aboutme">
                <h1 class="display-4 loto">Solange Céspedes</h1>
                <p class=" lead my-3 loto">"La greda es como una terapia para mí. El hecho de trabajarla, de crear, es un arte, es algo magnífico y maravilloso”</p>              
            </div>
            <div class="mb-0"><a href="##" class="badge badge-pill loto">Contacta con Solange...</a></div>
        </div>       
        <div class="sobremi">
                    <h3 class="pb-4 mb-4 font-italic border-bottom loto"> Sobre Solange
                    </h3>
                    <p>Nacida y criada en Pomaire. Hace más de 20 años que trabaja la alfarería.</p>
                    <p>Este es un trabajo muy lindo, un trabajo manual, una tradición de Pomaire que ya se está perdiendo y nosotras las mujeres la estamos siguiendo, avanzando, enseñándoles a nuestros hijos.</p>
                    <p>Con las capacitaciones en BanIgualdad me enseñaron a cómo manejar un negocio y gracias a esa formación me decidí a abrir mi propio local. Al exhibir yo mis productos, venderlos yo misma, es otra ganancia la que se recibe.</p>
                    <p>Jamás pensé en que podría tener mi propio local.</p>
        </div>
      </div>
        <div class="container mobile">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div
                      class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                      <div class="col p-4 d-flex flex-column position-static">
                          <strong class="d-inline-block mb-2 text-primary text-center">Productos</strong>
                          <h3 class="mb-0 text-center loto">Olla arrocera</h3>
                          <p class="mb-1 text-muted">Precio: $...</p>
                          <p class="card-text mb-auto text-justify">Mantiene muy bien el calor de los alimentos y es totalmente ecológica, sin eliminar residuos tóxicos en la cocción.</p>
                       
                      </div>
                      <div class="col-auto d-block">
                        <img class="bd-placeholder-img photo" alt="producto1"  src={olla}/>
                      </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                        <div
                        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary text-center">Productos</strong>
                            <h3 class="mb-0 text-center loto">Juego de Copas</h3>
                            <p class="mb-1 text-muted">Precio: $...</p>
                            <p class="card-text mb-auto">Copas de greda pomairina, confeccionadas y bruñidas a mano</p>
                           
                        </div>
                        <div class="col-auto d-block">
                          <img class="bd-placeholder-img photo" alt="producto2"src={copas}/>                       
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item">
                        <div
                        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary text-center">Productos</strong>
                            <h3 class="mb-0 text-center loto">Sartén</h3>
                            <p class="mb-1 text-muted">Precio: $...</p>
                            <p class="card-text mb-auto text-justify">Versión pequeña ideal para prearar una tortilla chica o un par de dorados huevos, inclusive puedes prepar panqueques.</p>
                            
                        </div>
                        <div class="col-auto d-block">
                                <img class="bd-placeholder-img photo" alt="producto3"src={sarten}/>                       
                        </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                      <div
                      class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                      <div class="col p-4 d-flex flex-column position-static">
                          <strong class="d-inline-block mb-2 text-primary text-center">Productos</strong>
                          <h3 class="mb-0 text-center loto">Juego de vasos</h3>
                          <p class="mb-1 text-muted">Precio: $...</p>
                          <p class="card-text mb-auto text-justify">Versátil juego de vasos de greda pomairina, confeccionados y bruñidos a mano.</p>
                          
                      </div>
                      <div class="col-auto d-block">
                              <img class="bd-placeholder-img photo" alt="producto3"src={vasos}/>        
                          </div>
                  </div>

                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
    </div>        
<div class=" container desktop">
      <div class="row mb-2">
            <div class="col-md-6">
                <div
                    class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">Productos</strong>
                        <h3 class="mb-0 loto">Juego de Copas</h3>
                        <div class="mb-1 text-muted">Precio: $...</div>
                        <p class="card-text mb-auto">Copas de greda pomairina, confeccionadas y bruñidas a mano</p>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                      <img class="bd-placeholder-img" alt="producto1"width="200" height="250" xmlns="http://www.w3.org/2000/svg" src={copas}/>                       
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div
                    class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">Productos</strong>
                        <h3 class="mb-0 loto">Juego de vasos</h3>
                        <div class="mb-1 text-muted">Precio: $...</div>
                        <p class="mb-auto">Versátil juego de vasos de greda pomairina, confeccionados y bruñidos a mano.</p>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                            <img class="bd-placeholder-img" alt="producto2" width="200" height="250" xmlns="http://www.w3.org/2000/svg" src={vasos}/>                       
                          </div>
                </div>
            </div>
        </div>
        <div class="row mb-2">
                <div class="col-md-6">
                    <div
                        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">Productos</strong>
                            <h3 class="mb-0 loto">Olla arrocera</h3>
                            <div class="mb-1 text-muted">Precio: $...</div>
                            <p class="card-text mb-auto">Mantiene muy bien el calor de los alimentos y es totalmente ecológica, sin eliminar residuos tóxicos en la cocción.</p>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                          <img class="bd-placeholder-img" alt="producto3" width="200" height="250" xmlns="http://www.w3.org/2000/svg" src={olla}/>                       
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div
                        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">Productos</strong>
                            <h3 class="mb-0 loto">Sartén</h3>
                            <div class="mb-1 text-muted">Precio: $...</div>
                            <p class="mb-auto">Versión pequeña ideal para prearar una tortilla chica o un par de dorados huevos, inclusive puedes prepar panqueques.</p>
                        </div>
                        <div class="col-auto  d-none d-lg-block">
                                <img class="bd-placeholder-img" alt="producto4"width="200" height="250" xmlns="http://www.w3.org/2000/svg" src={sarten}/>                       
                              </div>
                    </div>
                </div>
            </div>
            </div>
    <footer class="blog-footer">
        <p>BanIgualdad - Laboratoria 2019</p>
        <p>
            <a href="##">Volver al Inicio</a>
        </p>
    </footer>
</div>
    )

  }
}
export default PerfilPage