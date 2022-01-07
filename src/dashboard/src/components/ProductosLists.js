import React from 'react';
import propTypes from "prop-types";

function Mostrar(props){
    return(
        <React.Fragment>            
<main>
  <section className="last-visit">
    <h3>{props.nombre}</h3>
    <h3> ID: {props.id}</h3>
    <div className="products">
      <article>
        <img src={props.imagen} alt="imagen no disponible" className="product_img"></img>
        <div >
          <i/>
          <div>
            {/* <p className="price">$6.770</p> */}
            {/* <p className="discount">40% off</p>   */}
          </div>
          <h4 >{props.marca.nombre}</h4>
        </div>
      </article>     
    </div>  
  </section>
 
</main>

        </React.Fragment>

    )
}
Mostrar.propTypes={ 
  nombre: propTypes.string,
  id: propTypes.number,
  imagen: propTypes.string,
  marca: propTypes.string
}

export default Mostrar;