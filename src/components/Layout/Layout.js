import React from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import styles from "./Layout.module.scss"

const Layout = ({ children }) => (
  <div className={styles.pageWrapper}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
