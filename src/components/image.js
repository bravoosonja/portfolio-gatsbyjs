import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const Image = ({ data }) => {
  const query = graphql`
    query {
      project1: file(relativePath: { eq: "images/project1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 700)
        }
      }
      project2: file(relativePath: { eq: "images/project2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 700)
        }
      }
      project3: file(relativePath: { eq: "images/project3.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 700)
        }
      }
      project4: file(relativePath: { eq: "images/project4.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 700)
        }
      }
      project5: file(relativePath: { eq: "images/project5.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 700)
        }
      }
      project6: file(relativePath: { eq: "images/project6.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 700)
        }
      }
    }
  `

  return (
    <>
      {data === 1 ? (
        <GatsbyImage image={data.project1.childImageSharp.gatsbyImageData} />
      ) : data === 2 ? (
        <GatsbyImage image={data.project2.childImageSharp.gatsbyImageData} />
      ) : data === 3 ? (
        <GatsbyImage image={data.project3.childImageSharp.gatsbyImageData} />
      ) : data === 4 ? (
        <GatsbyImage image={data.project4.childImageSharp.gatsbyImageData} />
      ) : data === 5 ? (
        <GatsbyImage image={data.project5.childImageSharp.gatsbyImageData} />
      ) : (
        <GatsbyImage image={data.project6.childImageSharp.gatsbyImageData} />
      )}
    </>
  )
}
