import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

import cn from "./Hero.module.scss"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroPostQuery {
      post: allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 1
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
      banner: file(relativePath: { eq: "coding.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const title = data.post.edges[0].node.frontmatter.title
  const postUrl = data.post.edges[0].node.fields.slug

  return (
    <article className={cn.wrapper}>
      <Link to={postUrl} className={cn.link}>
        <Img
          fluid={data.banner.childImageSharp.fluid}
          className={cn.heroImage}
        />
        <div className={cn.postData}>
          <h2>{title}</h2>
        </div>
      </Link>
    </article>
  )
}

export default Hero
