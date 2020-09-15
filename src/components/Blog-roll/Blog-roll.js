import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PostCard from "../../components/Post-card/Post-card"

import styles from "./Blog-roll.module.scss"

const BlogRoll = ({ data }) => {
  const localData = useStaticQuery(graphql`
    query BlogRollQuery {
      banner: file(relativePath: { eq: "coding.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges
  const withoutFirstPost = posts.slice(1)

  return (
    <>
      <section className={styles.blogRoll}>
        {withoutFirstPost.map(({ node: post }) => {
          const id = post.id
          const title = post.frontmatter.title
          const excerpt = post.excerpt
          const timeToRead = post.timeToRead
          const postUrl = post.fields.slug
          const image = localData.banner.childImageSharp.fluid
          return (
            <PostCard
              key={id}
              title={title}
              excerpt={excerpt}
              timeToRead={timeToRead}
              image={image}
              postUrl={postUrl}
            />
          )
        })}
      </section>
    </>
  )
}

export default BlogRoll
