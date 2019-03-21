import React, {Component} from 'react';
import './Noticias.css'


class Noticias extends Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <br></br>
          <h5>Conoce Otros emprendimientos</h5>
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>

            <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="https://www.banigualdad.cl/wp-content/uploads/2018/11/solange-cspedes.jpg" className="img-fluid" alt="First slide"/>
                  <div className="carousel-caption">
                    <h5>SOLANGE CÉSPEDES: MANTENIENDO LA TRADICIÓN EN POMAIRE</h5>
                    <p>Soy Solange Céspedes, tengo 46 años, soy nacida y criada en Pomaire. Hace más de 20 años que trabajo la alfarería, este es un trabajo muy lindo, un trabajo manual, una tradición de Pomaire que ya se está perdiendo y nosotras las mujeres la estamos siguiendo.</p>
                  </div>
                  </div>
                  
                  <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.banigualdad.cl/wp-content/uploads/2018/06/alice-peailillo.jpg" className="img-fluid" alt="Second slide"/>
                  <div className="carousel-caption">
                    <h5>LAS TERAPIAS DE ALICE</h5>
                    <p>Alice Peñailillo vive en San Antonio, luego de quedar sin trabajo pudo dedicarse 100% a lo que más le gusta: “Todo lo que son las terapias complementarias me apasiona.</p>
                  </div>
                  </div>
                  
                  <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.banigualdad.cl/wp-content/uploads/2018/09/maria-rodriguez-curico-2.jpg" className="img-fluid" alt="Third slide"/>
                  <div className="carousel-caption">
                    <h5>BANIGUALDAD EN GLOBAL GIVING</h5>
                    <p>Como Fundación les proporcionaremos orientación y tutoría semanales, educación empresarial básica, y también financiaremos sus proyectos.</p>
                  </div>
                  </div>

                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
              
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                  </a>
              </div>
            <br></br>

            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
            <br></br>
            <h5>Temas mas comentados</h5>
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
            </ol>

          <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="https://www.banigualdad.cl/wp-content/uploads/2018/04/marisol-castaeda-y-anbal-vial.jpg" className="img-fluid" alt="First slide"/>
                <div className="carousel-caption">
                  <h5>CUMPLE TU SUEÑO”: VAMOS POR MÁS</h5>
                  <p>En marzo lanzamos la sexta versión de este concurso que nos orgullece como Fundación al poder premiar con un millón de pesos a los cinco emprendedores más destacados de Banigualdad.</p>
                </div>
                </div>
                
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://www.banigualdad.cl/wp-content/uploads/2018/01/luz-gacita.jpg" className="img-fluid" alt="Second slide"/>
                <div className="carousel-caption">
                  <h5>EMPRENDER PARA NO DESCUIDAR LOS HIJOS NI LA CASA Y TRABAJAR IGUAL.</h5>
                  <p>Luz Gacitúa es de Maipú y emprende con la venta de cosméticos. Su principal innovación es vender marcas no testeadas en animales y así aportar con un granito de arena en esta causa. </p>
                </div>
                </div>
                
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://www.banigualdad.cl/wp-content/uploads/2018/03/marianela-crdova.jpg" className="img-fluid" alt="Third slide"/>
                <div className="carousel-caption">
                  <h5>DATO MARZO: UNIFORMES ESCOLARES</h5>
                  <p>Tengo mi taller de costuras desde hace 9 años, la edad que tiene mi segundo hijo. Por él quise dejar de trabajar fuera de la casa y poder dedicarme a lo mío, a lo que más me gusta y a lo que estudié.</p>
                </div>
                </div>

                <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
            
                <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
              
            </div>
                <br></br>

              <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
                  <br></br>
                  <h5>Ultimas Noticias</h5>
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                  </ol>

                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src="https://www.banigualdad.cl/wp-content/uploads/2018/04/despega-ok.jpg" alt="First slide"/>
                      <div class="carousel-caption">
                        <h5>“DESPEGA 2018”: NUEVOS EVENTOS PARA NUESTROS EMPRENDEDORES</h5>
                        <p>Este año, el equipo de Marketing y Comunicaciones decidió variar las tradicionales actividades para nuestros microempresarios y aprovechar la alianza con Inacap concretada el año pasado con el fin de potenciar el trabajo de nuestros emprendedores y entregarles nuevas herramientas.</p>
                      </div>
                      </div>
                      
                      <div className="carousel-item">
                        <img className="d-block w-100" src="https://www.banigualdad.cl/wp-content/uploads/2018/04/visita-radio-adn-1.jpg" className="img-fluid" alt="Second slide"/>
                      <div className="carousel-caption">
                        <h5>BANIGUALDAD EN RADIO ADN</h5>
                        <p>El 21 de marzo pasado, nuestro Gerente General, Patricio Cordero, fue invitado al programa “Ciudadano ADN” con el fin de participar en un panel sobre la deuda en Chile y cómo entidades como la nuestra apoyan a microempresarios que muchas veces están en Dicom.  </p>
                      </div>
                      </div>
                      
                      <div className="carousel-item">
                        <img className="d-block w-100" src="https://www.banigualdad.cl/wp-content/uploads/2018/06/supervisores-bi.jpg"  alt="Third slide"/>
                      <div className="carousel-caption">
                        <h5>SUPERVISORES DE BANIGUALDAD REALIZAN SU ENCUENTRO ANUAL EN SANTIAGO</h5>
                        <p>Entre el 29 y el 31 de mayo, los 16 supervisores de nuestra Fundación participaron del Encuentro de Supervisores Banigualdad, evento que se realiza cada año.</p>
                      </div>
                      </div>

                      <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                  
                      <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="sr-only">Next</span>
                      </a>
                    <br></br>
                      </div>
                  </div>
              </div>
          </div>
      );
    }
}


export default Noticias;