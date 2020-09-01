import React, {useState} from 'react'

import "./header.css"




const Header = () => {
  

  
    return (
      <div className="containerNav">
      <div className="navbarTop">
        <div className="Navbar">
          <div className="Navbar__Link brand toggle border show" id="borderr">
            <a href="www.google.com">Bogdan Cristian</a>
          </div>
    
          <div className="Navbar__Items Navbar__Items--right ">
            <div className="Navbar__Link NavbarMenu ">
              <a href="{{ site.baseurl }}/">Projects</a>
            </div>
            <div className="Navbar__Link NavbarMenu">
              <a href="{{ site.baseurl }}/">Knowledge</a>
            </div>
            <div className="Navbar__Link NavbarMenu">
              <a href="#goto">Contact</a>
            </div>
    
          </div>
        </div>
      </div>
    </div>
        
    )
}

export default Header