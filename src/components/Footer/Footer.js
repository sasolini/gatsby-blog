import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import logo from "../../assets/logo.svg"
import facebook from "../../assets/social/facebook.svg"
import instagram from "../../assets/social/instagram.svg"
import twitter from "../../assets/social/twitter.svg"
import vimeo from "../../assets/social/vimeo.svg"

import cn from "./Footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 4
        sort: { fields: frontmatter___date, order: ASC }
      ) {
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
    }
  `)

  const recentPosts = data.allMarkdownRemark.edges

  return (
    <footer className={cn.footer}>
      <div>
        <Link to="/" title="Logo">
          <img src={logo} alt="WordTech" className={cn.logo} />
        </Link>
      </div>
      <div className={cn.recent}>
        <h3>Recent posts</h3>
        <ul>
          {recentPosts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              {/* <span>{post.frontmatter.title}</span> */}
            </li>
          ))}
        </ul>
      </div>
      <div className={cn.socials}>
        <div>
          <a title="facebook" href="https://facebook.com">
            <img src={facebook} alt="Facebook" />
          </a>
          <a title="twitter" href="https://twitter.com">
            <img src={twitter} alt="Twitter" />
          </a>
          <a title="instagram" href="https://instagram.com">
            <img src={instagram} alt="Instagram" />
          </a>
          <a title="vimeo" href="https://vimeo.com">
            <img src={vimeo} alt="Vimeo" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
