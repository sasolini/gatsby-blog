import React from "react"

import PostCard from "../../components/Post-card/Post-card"

import styles from "./Blog-roll.module.scss"

const BlogRoll = ({ data, pageContext }) => {
  let posts = []
  const allPosts = data.allMarkdownRemark.edges
  const withoutFirstPost = allPosts.slice(1)

  if (pageContext.pageNumber === 0) {
    posts = withoutFirstPost
  } else {
    posts = allPosts
  }

  return (
    <>
      <section className={styles.blogRoll}>
        {posts.map(({ node: post }) => {
          const id = post.id
          const title = post.frontmatter.title
          const excerpt = post.excerpt
          const timeToRead = post.timeToRead
          const postUrl = post.fields.slug
          const featuredImage =
            post.frontmatter.featuredimage.childImageSharp.fluid
          return (
            <PostCard
              key={id}
              title={title}
              excerpt={excerpt}
              timeToRead={timeToRead}
              featuredImage={featuredImage}
              postUrl={postUrl}
            />
          )
        })}
      </section>
    </>
  )
}

export default BlogRoll
