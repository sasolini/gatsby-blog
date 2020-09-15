import React from "react"
import { Link } from "gatsby"

import styles from "./Button.module.scss"

const Button = ({ children, styleName, inverted, ...rest }) => {
  let btnStyles = styleName ? `${styles.btn} ${styleName}` : styles.btn
  btnStyles = inverted ? `${btnStyles} ${styles.inverted}` : btnStyles
  return (
    <Link {...rest} className={btnStyles}>
      {children}
    </Link>
  )
}

export default Button
