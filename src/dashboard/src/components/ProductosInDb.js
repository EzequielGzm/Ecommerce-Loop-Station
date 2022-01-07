//Componentes stateful componente podrá cambiar sucontenido interno.
import React, { Component } from "react";
import Mostrar from "./ProductosLists";

class ProductosInDb extends Component {
  constructor() {
    super();
    this.state = { productosList: [] };
  }

  componentDidMount() {
    fetch("http://localhost:4010/api/productos")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {
        this.setState({ productosList: products.datos.productos });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <div className="data-card">
          {this.state.productosList.map((user, index) => {
            return <Mostrar {...user} key={index} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default ProductosInDb;
