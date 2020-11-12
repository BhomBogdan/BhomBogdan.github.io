import React from "react"

import "./projects.scss"
import Img from "gatsby-image"
import upturn_mockup from "../assets/projects/upturn_mockup.png"
import projectIllustrator from "../assets/projects/projectsIllustrator.png"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
const Projects = () => {
  const animateMore = () => {
    console.log("enter")

    let AnimatePointer = document.getElementById("Pointer1Animate")
    AnimatePointer.classList.remove("Animationtest2Reverse")
    AnimatePointer.classList.add("Animationtest2")
    AnimatePointer.addEventListener(
      "webkitAnimationEnd",
      console.log("asd"),
      false
    )
  }

  const animateMoreStop = () => {
    console.log("leave")

    let AnimatePointer = document.getElementById("Pointer1Animate")
    AnimatePointer.classList.remove("Animationtest2")
    AnimatePointer.classList.add("Animationtest2Reverse")
  }

  return (
    <div className="container-projects">
      <div className="tittle">
        <a1>Projects</a1>
        <a2>Illustrations, Apps, Prototypes and much more ! </a2>
      </div>
      <div className="subcontainerS">
        <div className="columns-flex-1">
          <div className="project1 projectContainer">
            <div className="textprojects">
              <a4>Website</a4>
              <a2>HTML, CSS, JS from scratch</a2>
            </div>
            <div className="imageproject">
              <img src={upturn_mockup} />
            </div>
            <div className="buttonsproject">
              <a
                href="https://upturnsolutionrepository.github.io/"
                className="buttonProject1 red"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/BhomBogdan/UpTurnSolution"
                className="buttonProject1 red"
              >
                Github
              </a>
            </div>
          </div>
          <div className="project2 projectContainer workinprogress projectMinHeight">
            <a4>Work in progres...</a4>
          </div>
        </div>
        <div className="columns-flex-2">
          <div className="project3 projectContainer ">
            <div className="textprojects">
              <a4>Illustrations</a4>
              <a2>Icons, vector art, etc</a2>
            </div>
            <div className="imageproject">
              <img src={projectIllustrator} />
            </div>
            <a
              href="https://www.instagram.com/bhombogdan/"
              className="buttonsproject"
            >
              <a className="buttonProject1 yellow">More draws !</a>
            </a>
          </div>
          <div className="project4 projectContainer workinprogress">
            <a4>Work in progress...</a4>
          </div>
        </div>
      </div>
      <div
        className="animationMore"
        id="Pointer1Animate"
        onMouseEnter={() => {
          animateMore()
        }}
        onMouseLeave={() => {
          animateMoreStop()
        }}
      >
        <div className="line"></div>
        <div className="pointerContainer">
          <div className="pointer"></div>
          <div className="rotate"></div>
        </div>

        <div className="line"></div>
      </div>
    </div>
  )
}
export default Projects
