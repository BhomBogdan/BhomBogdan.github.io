import React from "react"

import Profile from "../assets/images/profile.jpg"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "./landing.scss"
import BehanceIcon from "../assets/icons_landing/Icon-SolidbehancePNG.png"
import GithubIcon from "../assets/icons_landing/Icon-SolidgithubPNG.png"
import InstagramIcon from "../assets/icons_landing/Icon-SolidInstagramPNG.png"
import CvIcon from "../assets/icons_landing/Icon-SolidcvPNG.png"

const Landing = () => {
  const openInNewTab = url => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer")
    if (newWindow) newWindow.opener = null
  }
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(sourceInstanceName: { eq: "imagesall" }) {
        childImageSharp {
          fixed(width: 400) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `)

  console.log(data.file.childImageSharp.fixed)
  console.log("sus e data")
  return (
    <div className="container-FlexBox">
      <div className="SubContainer-FlexBox">
        <div className="Left">
          <div className="UpContent">
            <a2>Hello, I'm Bogdan</a2>
            <a1>Full-stack developer</a1>

            <Img fixed={data.file.childImageSharp.fixed} />
            <a2>
              I want to share the knowledge that I have acquired so far and I am
              willing to learn many new things.
            </a2>
          </div>

          <div className="ContactAndButton">
            <div className="button">
              <a3>My work</a3>
            </div>
            <Link to="/Contact" className="buttonText">
              Contact me
            </Link>
          </div>
        </div>

        <div className="Right">
          <div className="UpContentRightSection">
            <div className="imagehere">
              <img src={Profile} />
            </div>
          </div>
          <div className="DownContentRightSection">
            <div
              className="iconhere"
              onClick={() => {
                openInNewTab("PortofolioCV.pdf")
              }}
            >
              <img src={CvIcon}></img>
              <a5>CV </a5>
            </div>
            <div
              className="iconhere"
              onClick={() => {
                openInNewTab("https://github.com/BhomBogdan")
              }}
            >
              <img src={GithubIcon}></img>
              <a5>Github</a5>
            </div>
            <div
              className="iconhere"
              onClick={() => {
                openInNewTab("https://www.instagram.com/bhombogdan/")
              }}
            >
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
    </div>
  )
}

export default Landing
