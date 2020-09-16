import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout/Layout"
import ConactForm from "../components/Contact-form/Contact-form"
import SEO from "../components/seo"

import cn from "./contact.module.scss"

const ContactPage = () => {
  const localData = useStaticQuery(graphql`
    query {
      Img: allImageSharp(
        filter: { fluid: { originalName: { eq: "contact.jpg" } } }
      ) {
        edges {
          node {
            fluid(maxWidth: 2400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  const futureImg = localData.Img.edges[0].node.fluid

  return (
    <Layout>
      <SEO title="Contact" />
      <div className={cn.hero}>
        <Img fluid={futureImg} alt="future" className={cn.image} />
        <div className={cn.title}>
          <h1>Contact</h1>
        </div>
      </div>
      <section className={cn.singlePost}>
        <h2>Hit us up!</h2>
        <p className={cn.text}>
          Use the following form to contact us via email. Your email will be
          read but due to the large volumes of emails received a reply may not
          be prompt.
        </p>
        <ConactForm />
        <p className={cn.notice}>This is a demo, contact form is not active.</p>
      </section>
    </Layout>
  )
}

export default ContactPage
