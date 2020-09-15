import React, { useState } from "react"
import { Link } from "gatsby"

import MobileMenu from "../Mobile-menu/Mobile-menu"

import logo from "../../assets/logo.svg"
import Navigation from "../Navigation/Navigation"
import hamburger from "../../assets/open-menu.svg"

import cn from "./header.module.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const buttonClickHandler = ev => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={cn.wrapper}>
      <div>
        <Link to="/" title="Logo">
          <img src={logo} alt="WordTech" className={cn.logo} />
        </Link>
        <nav className={cn.navbar}>
          <Navigation />
        </nav>
        <button onClick={buttonClickHandler} className={cn.hamburger}>
          <img src={hamburger} alt="menu" />
        </button>
      </div>
      <MobileMenu isOpen={isOpen} />
    </header>
  )
}
export default Header
