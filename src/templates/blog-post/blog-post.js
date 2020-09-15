import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/Layout/Layout"

import cn from "./blog-post.module.scss"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const futrueImg = post.frontmatter.featuredimage.childImageSharp.fluid
  return (
    <Layout>
      <div className={cn.hero}>
        <Img fluid={futrueImg} alt="future" className={cn.image} />
        <div className={cn.title}>
          <h1>{post.frontmatter.title}</h1>
        </div>
      </div>
      <article className={cn.singlePost}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        featuredimage {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
