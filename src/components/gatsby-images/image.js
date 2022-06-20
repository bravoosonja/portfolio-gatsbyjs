import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      project1: file(relativePath: { eq: "project1.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project2: file(relativePath: { eq: "project2.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project3: file(relativePath: { eq: "project3.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project4: file(relativePath: { eq: "project4.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project5: file(relativePath: { eq: "project5.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project6: file(relativePath: { eq: "project6.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {src === 1 ? (
        <Img fluid={data.project1.childImageSharp.fluid} />
      ) : src === 2 ? (
        <Img fluid={data.project2.childImageSharp.fluid} />
      ) : src === 3 ? (
        <Img fluid={data.project3.childImageSharp.fluid} />
      ) : src === 4 ? (
        <Img fluid={data.project4.childImageSharp.fluid} />
      ) : src === 5 ? (
        <Img fluid={data.project5.childImageSharp.fluid} />
      ) : (
        <Img fluid={data.project6.childImageSharp.fluid} />
      )}
    </>
  )
}
