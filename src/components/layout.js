import React from "react"

import Header from "./header"
import Footer from "./footer"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div class="containerBody">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
