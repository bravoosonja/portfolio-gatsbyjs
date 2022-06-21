import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// Components
import Header from "./header"
import Menu from "./menu"
import About from "./about"
import Contact from "./contact"
// Hooks
import useMousePosition from "../hooks/useMousePosition"
// Styles
import "../styles/App.scss"
// Framer-motion
import { motion } from "framer-motion"

const Layout = ({ children }) => {
  const siteData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [menuState, setMenuState] = useState(false)
  const [cursorHovered, setCursorHovered] = useState(false)

  // Mouse coordinates
  const { x, y } = useMousePosition()

  return (
    <div className="app">
      <motion.div
        animate={{
          x: x - 16,
          y: y - 16,
          scale: cursorHovered ? 1.5 : 1,
          opacity: cursorHovered ? 0.2 : 1,
        }}
        transition={{ ease: "linear", duration: 0.1 }}
        className="cursor"
      ></motion.div>
      <Header
        siteTitle={siteData.site.siteMetadata.title}
        setMenuState={setMenuState}
        setCursorHovered={setCursorHovered}
        onMouseEnter={() => setCursorHovered(true)}
        onMouseLeave={() => setCursorHovered(false)}
      />
      <Menu
        x={x}
        y={y}
        menuState={menuState}
        setMenuState={setMenuState}
        setCursorHovered={setCursorHovered}
        onMouseEnter={() => setCursorHovered(true)}
        onMouseLeave={() => setCursorHovered(false)}
      />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
