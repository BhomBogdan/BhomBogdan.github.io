import React from "react"
import Layout from "../components/layout"
import Landing from "../components/landing"
import Projects from "../components/projects"
import Skills from "../components/skills"

import "../components/layout.scss"
const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <Projects />
      <Skills />
    </Layout>
  )
}

export default IndexPage
