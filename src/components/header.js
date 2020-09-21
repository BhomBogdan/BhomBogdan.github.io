import React, {useState} from 'react'

import "./header.scss"
import BIcon from "../assets/icons_landing/BIcon.png"
import { Link } from "gatsby"


const Header = () => {
  

  
    return (
      <div className="containerNav">
      <div className="navbarTop">
        <div className="Navbar">
          <div className="Navbar__Link brand toggle border show" id="borderr">
          <img src={BIcon} /> <a href="www.google.com">ogdan Cristian</a>
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