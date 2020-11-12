import React, { useState } from "react"
import { Link } from "gatsby"
import "./header.scss"
import scrollTo from "gatsby-plugin-smoothscroll"
const Header = () => {
  const ToggleButtonBurger = () => {
    let el = document.getElementById("test1")
    if (el.classList.contains("hideToggle")) {
      el.classList.toggle("hide")
      el.classList.remove("hideToggle")
    } else {
      el.classList.toggle("hide")
      el.classList.add("hideToggle")
    }
    console.log(el)
  }

  return (
    <div className="containerNav">
      <div className="subContainerNav">
        <div className="LogoBurgerSubContainer">
          <Link className="logoNavBar" to="/">
            <div className="textLogoNavBar">Draghia Bogdan</div>
          </Link>

          <div className="BurgerToggle" onClick={() => ToggleButtonBurger()}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>

        <div id="test1" className="NavBarItems hideToggle">
          <Link to="/Contact" className="Nav">
            Projects
          </Link>
          <div onClick={() => scrollTo("#scrollToKnowledge")} className="Nav">
            Knowledge
          </div>
          <Link to="/Contact" className="Nav">
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
