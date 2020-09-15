import React from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import cn from "./Layout.module.scss"

const Layout = ({ children }) => (
  <div className={cn.pageWrapper}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
