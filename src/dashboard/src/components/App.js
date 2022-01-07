import React from 'react';
import ContentWrapper from './ContentWrapper';
import SideBar from './SideBar';
import "../assets/css/productos.css"

function App() {
  return (
    <>
      	<div className='App'>
         <SideBar/>
         <ContentWrapper/> 
        </div>
    </>
  );
}

export default App;
