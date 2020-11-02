import React from "react"

import Profile from '../assets/images/profile.jpg'


import "./landing.scss"
import BehanceIcon from "../assets/icons_landing/Icon-SolidbehancePNG.png"
import GithubIcon from "../assets/icons_landing/Icon-SolidgithubPNG.png"
import InstagramIcon from "../assets/icons_landing/Icon-SolidInstagramPNG.png"
import CvIcon from "../assets/icons_landing/Icon-SolidcvPNG.png"
import { navigate } from "gatsby"

import  PortofolioCV from '../../static/PortofolioCV.pdf'
const Landing = () => {
  
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
  
    return (
<div className="container-FlexBox">
  <div className="SubContainer-FlexBox">
    <div className="Left">
      <div className="UpContent">
        <a2>Hello, I'm Bogdan</a2>
        <a1>Full-stack developer</a1>
        <a2>I want to share the knowledge that I have acquired so
far and I am willing to learn many new things.</a2>
      </div>

      <div className="ContactAndButton">
        <div className="button"><a3>My work</a3></div>
        <div className="buttonText"><a3>Contact me</a3></div>
      </div>
    </div>

    <div className="Right">
      <div className="UpContentRightSection">
        <div className="imagehere"><img src={Profile}/></div>
      </div>
      <div className="DownContentRightSection">
        <div className="iconhere" onClick={()=>{openInNewTab('PortofolioCV.pdf')}} >
          <img src={CvIcon}></img>
          <a5>CV </a5>
        </div>
        <div className="iconhere" onClick={()=>{openInNewTab("https://github.com/BhomBogdan")}}>
        <img src={GithubIcon}></img>
          <a5>Github</a5>
        </div>
        <div className="iconhere" onClick={()=>{openInNewTab("https://www.instagram.com/bhombogdan/")}}>
        <img src={InstagramIcon}></img>
          <a5>Instagram</a5>
        </div>
        <div className="iconhere">
        <img src={BehanceIcon}></img>
         <a5>Behance</a5>
        </div>
      </div>
    </div>
  </div>
</div>)
}
export default Landing