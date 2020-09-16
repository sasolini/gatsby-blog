const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require(`gatsby-awesome-pagination`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPosts = await graphql(`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  //add error catch

  const pathPrefix = ({ pageNumber, numberOfPages }) =>
    pageNumber === 0 ? "/" : "/blog"

  paginate({
    createPage, // The Gatsby `createPage` function
    items: blogPosts.data.allMarkdownRemark.edges, // An array of objects
    itemsPerPage: 6,
    itemsPerFirstPage: 7, // How many items you want per page
    pathPrefix, // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/index/index-page.js`), // Just like `createPage()`
  })

  blogPosts.data.allMarkdownRemark.edges.map(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/blog-post/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
