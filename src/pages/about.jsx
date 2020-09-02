import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
const About = ({data: {about: {nodes}}}) => {
  const { info, title, image, stack } = nodes[0];
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img"/>
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              { stack.map((item) =>{
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql `
{
  about: allStrapiAbout {
    nodes {
      info
      title
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
export default About