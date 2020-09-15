import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout/Layout"

import cn from "./about.module.scss"

const BlogPost = () => {
  const localData = useStaticQuery(graphql`
    query {
      Img: allImageSharp(
        filter: { fluid: { originalName: { eq: "lifestyle.jpg" } } }
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
      <div className={cn.hero}>
        <Img fluid={futureImg} alt="future" className={cn.image} />
        <div className={cn.title}>
          <h1>About</h1>
        </div>
      </div>
      <section className={cn.singlePost}>
        <h2>I'm grateful you are here!</h2>
        <p className={cn.text}>
          "If I want to be the best, I have to take risks others would avoid,
          always optimizing the learning potential of the moment and turning
          adversity to my advantage. That said, there are times when the body
          needs to heal, but those are ripe opportunities to deepen the mental,
          technical, internal side of my game.
        </p>
        <p>
          When aiming for the top, your path requires an engaged, searching
          mind. You have to make obstacles spur you to creative new angles in
          the learning process. Let setbacks deepen your resolve. You should
          always come off an injury or a loss better than when you went down."
        </p>
        <p className={cn.author}>
          ―Josh Waitzkin, The Art of Learning: A Journey in the Pursuit of
          Excellence
        </p>
      </section>
    </Layout>
  )
}

export default BlogPost
