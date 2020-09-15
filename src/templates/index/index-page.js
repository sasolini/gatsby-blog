import React from "react"

import Layout from "../../components/Layout/Layout"
import Hero from "../../components/Hero/Hero"
import BlogRoll from "../../components/Blog-roll/Blog-roll"
import Pager from "../../components/Pager/Pager"

const HomePage = ({ data, pageContext }) => {
  return (
    <Layout>
      <Hero />
      <BlogRoll data={data} pageContext={pageContext} />
      <Pager
        previousPagePath={pageContext.previousPagePath}
        nextPagePath={pageContext.nextPagePath}
      />
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query($skip: Int! = 1, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      skip: $skip
      limit: $limit
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            date
            description
            featuredimage {
              id
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          timeToRead
          excerpt
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
`
