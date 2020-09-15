import React from "react"

import Navigation from "../Navigation/Navigation"

import cn from "./Mobile-menu.module.scss"

const MobileMenu = ({ isOpen }) => (
  <div className={isOpen ? `${cn.wrapper} ${cn.open}` : cn.wrapper}>
    <nav className={cn.navigation}>
      <Navigation />
    </nav>
  </div>
)

export default MobileMenu
