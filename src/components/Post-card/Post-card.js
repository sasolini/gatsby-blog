import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./Post-card.module.scss"

const PostCard = props => {
  const { title, excerpt, timeToRead, image, postUrl } = props
  return (
    <article className={styles.postCard}>
      <Link className={styles.link} to={postUrl}>
        <Img fluid={image} className={styles.image} />
        <div className={styles.content}>
          <h2>{title}</h2>
          <span>{`Reading time: ${timeToRead} min`}</span>
          <p>{excerpt}</p>
        </div>
      </Link>
    </article>
  )
}

export default PostCard
