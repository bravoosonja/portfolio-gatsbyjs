import React from "react"
import { Image } from "../components/gatsby-images/image"

const Project = ({ pageContext }) => {
  const project = pageContext
  return (
    <>
      <div className="banner">
        <div className="inner-banner">
          <div className="container fluid">
            <h1 className="main-headline">{project.title}</h1>
            <div className="image">
              <Image src={project.src} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
