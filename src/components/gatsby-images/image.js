import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

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
        <Img fluid={data.project5.childImageSharp.fluid} />
      )}
    </>
  )
}
