import React from "react"
import { Link } from "gatsby"

import cn from "./Pager.module.scss"

const Pager = ({ previousPagePath, nextPagePath }) => (
  <div className={cn.pager}>
    {previousPagePath && (
      <Link to={previousPagePath} className={cn.previous}>
        &#x02AA1; Newer Posts
      </Link>
    )}
    {nextPagePath && (
      <Link to={nextPagePath} className={cn.next}>
        Older Posts &#x02AA2;
      </Link>
    )}
  </div>
)

export default Pager
