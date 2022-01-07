import React from 'react';
import image from '../assets/images/LogoNegro.png';



function SideBar() {
    return (
        <React.Fragment>
          <div>
          <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>
                </ul>

          </div>
        </React.Fragment>
    )
}
export default SideBar;