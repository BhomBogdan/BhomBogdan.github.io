
import React from "react"

import Header from './Header'
import Footer from './Footer'

import './layout.scss'


const Layout = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )

}
export default Layout