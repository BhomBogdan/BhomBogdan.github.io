import React from "react"


import "./skills.scss"

import javascript from "../assets/icons_landing/icons_knowledge/javascript.png"
import html from "../assets/icons_landing/icons_knowledge/html.png"
import css from "../assets/icons_landing/icons_knowledge/css.png"

const Skills = () => {
  

  
    return (

<div class="container">
<div class="tittle skillt">
    <a1>Knowledge</a1>
  </div>
  <div class="subcontainer">
    <div class="flex-container">
      <div class="Section1 box">
        <h1>Front-End</h1>
        <div class="list">
          <div class="icon"><img src={javascript}/><a2>Javascript</a2></div>
          <div class="icon"><img src={html}/><a2>HTML</a2></div>
          <div class="icon"><img src={css}/><a2>CSS</a2></div>
          <div class="icon"></div>
          <div class="icon"></div>
          <div class="icon"></div>

        </div>
      </div>
      <div class="Section2 box ">
        <h1>Back-End</h1>
        <div class="list">
        <div class="icon"><img src={javascript}/><a2>Javascript</a2></div>
          <div class="icon"><img src={html}/><a2>HTML</a2></div>
          <div class="icon"><img src={css}/><a2>CSS</a2></div>
          <div class="icon"></div>
          <div class="icon"></div>
          <div class="icon"></div>

        </div>
      </div>
      <div class="Section3 box">
        <h1>Tools</h1>

        <div class="list">
        <div class="icon"><img src={javascript}/><a2>Javascript</a2></div>
          <div class="icon"><img src={html}/><a2>HTML</a2></div>
          <div class="icon"><img src={css}/><a2>CSS</a2></div>
          <div class="icon"></div>
          <div class="icon"></div>
          <div class="icon"></div>

        </div>
      </div>
    </div>
  </div>
</div>

        )
}
export default Skills