import React from 'react';

function mostrar(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4"> 
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        {props.id}
                        <br/>
                        {props.nombre}                            
                        <br/>
                        {props.descripcion}
                        <br/>
                        <img style={{width: 15 +'rem'}} src={props.imagen} ></img>                         
                        <br/>         
                    </div>
                </div>
             </div> 
        </React.Fragment>
    )
}
//export default mostrar;