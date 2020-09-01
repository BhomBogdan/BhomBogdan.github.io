import React from "react"
import Profile from '../assets/images/profile.jpg'
import "./landing.scss"


const Landing = () => {
  

  
    return (
<div className="container-FlexBox">
  <div className="SubContainer-FlexBox">
    <div className="Left">
      <div className="UpContent">
        <a2>Hello, I'm Bogdan</a2>
        <a1>Freelancer Front-End and Back-End</a1>
        <a2>Lorem impsum asa dfs </a2>
      </div>

      <div className="ContactAndButton">
        <div className="button"><a3>My work</a3></div>
        <a3> Contact Me</a3>
      </div>
    </div>

    <div className="Right">
      <div className="UpContentRightSection">
        <div className="imagehere"><img src={Profile}/></div>
      </div>
      <div className="DownContentRightSection">
        <div className="iconhere"></div>
        <div className="iconhere"></div>
        <div className="iconhere"></div>
        <div className="iconhere"></div>
      </div>
    </div>
  </div>
</div>)
}
export default Landing