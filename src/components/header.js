import React, {useState} from 'react'

import "./header.scss"




const Header = () => {
  
    const ToggleButtonBurger = () => {
        let el = document.getElementById('test1');
        if(el.classList.contains('hideToggle')){
            el.classList.toggle('hide')
            el.classList.remove('hideToggle')}
        else{
            el.classList.toggle('hide')
            el.classList.add('hideToggle')
        }
        console.log(el)
    }
  
    return (

        <div className="containerNav">
            <div className="subContainerNav">
                <div className="LogoBurgerSubContainer">
                    <div className="logoNavBar" onClick={()=>{window.location.href="/"}}></div>
                    <div className="BurgerToggle" onClick={()=>ToggleButtonBurger()}>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                    </div>
                </div>
                
                <div id="test1" className="NavBarItems hideToggle">
                    <div className="Nav" >Projects</div>
                    <div className="Nav">Knowledge</div>
                    <div className="Nav" onClick={()=>{window.location.href="Contact"}}>Contact</div>
                </div>
            </div>
        </div>
    )
}

export default Header