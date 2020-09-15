import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../../components/Layout/Layout"

import BigImage from "../../assets/coding.jpg"

import styles from "./blog-post.module.scss"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={styles.hero}>
        <img src={BigImage} alt="future" className={styles.image} />
        <div className={styles.title}>
          <h1>{post.frontmatter.title}</h1>
        </div>
      </div>
      <article className={styles.singlePost}>
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
      }
    }
  }
`
