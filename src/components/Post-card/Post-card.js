import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import cn from "./Post-card.module.scss"

const PostCard = props => {
  const { title, excerpt, timeToRead, featuredImage, postUrl } = props
  return (
    <article className={cn.postCard}>
      <Link className={cn.link} to={postUrl}>
        <Img fluid={featuredImage} className={cn.image} />
        <div className={cn.content}>
          <h2>{title}</h2>
          <span>{`Reading time: ${timeToRead} min`}</span>
          <p>{excerpt}</p>
        </div>
      </Link>
    </article>
  )
}

export default PostCard
