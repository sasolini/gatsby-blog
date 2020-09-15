import React from "react"
import { Link } from "gatsby"

import cn from "./Navigation.module.scss"

const Navigation = () => (
  <ul className={cn.navItems}>
    <li>
      <Link to="/" activeClassName={cn.active}>
        Home
      </Link>
    </li>
    {/* <li>
      <Link to="/start-here" activeClassName={cn.active}>
        Start here
      </Link>
    </li> */}
    <li>
      <Link to="/about" activeClassName={cn.active}>
        About
      </Link>
    </li>
    <li>
      <Link to="/contact" activeClassName={cn.active}>
        Contact
      </Link>
    </li>
  </ul>
)

export default Navigation
