import React from "react"


import "./projects.scss"

import upturn_mockup from '../assets/projects/upturn_mockup.png'
import projectIllustrator from '../assets/projects/projectsIllustrator.png'

const Projects = () => {
  

  
    return (
<div class="container-projects">
  <div class="tittle">
    <a1>Projects</a1>
    <a2>Illustrations, Apps, Prototypes and much more ! </a2>
  </div>
  <div class="subcontainerS">
    <div class="columns-flex-1">
      <div class="project1 projectContainer">
        <div class="textprojects">
        <a4>Website</a4>
        <a2>HTML, CSS, JS from scratch</a2>
        </div>
        <div class="imageproject">
          <img src={upturn_mockup} />
        </div>
        <div class="buttonsproject">
          <div class="buttonProject1">
            <a6>Live demo</a6>
          </div>
          <div class="buttonProject1">
            <a6>More info</a6>
          </div>
          <div class="buttonProject1">
            <a6>Github</a6>
          </div>
        </div>

       
      </div>
      <div class="project2 projectContainer workinprogress">
        <a4>Work in progres...</a4>
      </div>
    </div>
    <div class="columns-flex-2">
      <div class="project3 projectContainer ">
      <div class="textprojects">
        <a4>Illustrations</a4>
        <a2>Icons, vector art, etc</a2>
        </div>
        <div class="imageproject">
          <img src={projectIllustrator} />
        </div>
        <div class="buttonsproject">

          <div class="buttonProject1">
            <a6>More draws ! </a6>
          </div>

        </div>

       
    
      </div>
      <div class="project4 projectContainer workinprogress">
        <a4>Work in progress...</a4>
      </div>
    </div>
  </div>
  </div>


)
}
export default Projects