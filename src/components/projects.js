import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
// icons
import { Close } from "../icons/icons"
// components
import { Image } from "./gatsby-images/image"
import data from "../data/projects.json"
// framer motion
import { motion, AnimatePresence } from "framer-motion"

// animation transition
const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

// animation variants
const titleSlideUp = {
  initial: { y: 200 },
  animate: { y: 0 },
}

const parent = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
}

const maskAnimation = {
  initial: { width: "100%" },
  animate: { width: 0 },
}

const Projects = ({ menuState, setMenuState, x, y, setCursorHovered }) => {
  return (
    <AnimatePresence>
      {menuState && (
        <>
          <motion.div
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible", transition: { delay: 1 } }}
            exit={{ visibility: "hidden", transition: { delay: 1 } }}
            className="projects"
          >
            <div className="menu-title">Projects</div>
            <div
              onClick={() => setMenuState(false)}
              setMenuState={setMenuState}
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
              className="close"
            >
              <Close />
            </div>
            <div className="menu">
              <div className="container">
                <div className="menu-inner">
                  <motion.ul
                    // staggering effect
                    variants={parent}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {data.map(list => (
                      <List
                        key={list.id}
                        id={list.id}
                        title={list.title}
                        src={list.src}
                        leftLineFlex={list.leftLineFlex}
                        rightLineFlex={list.rightLineFlex}
                        thumbnailPosition={list.thumbnailPosition}
                        x={x}
                        y={y}
                        offset={list.offset}
                        setCursorHovered={setCursorHovered}
                      />
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
          </motion.div>
          <Panels />
        </>
      )}
    </AnimatePresence>
  )
}

const List = ({
  title,
  src,
  leftLineFlex,
  rightLineFlex,
  thumbnailPosition,
  id,
  x,
  y,
  offset,
  setCursorHovered,
}) => {
  const [hoverState, setHoverState] = useState(false)

  // floating image hover effect
  const list = useRef()

  const [listPosition, setListPosition] = useState({
    top: 0,
    left: 0,
  })

  useEffect(() => {
    setListPosition({
      top: list.current.getBoundingClientRect().top,
      left: list.current.getBoundingClientRect().left,
    })
  }, [hoverState])

  return (
    <li ref={list}>
      <Link to={`/projects/${id}`}>
        <div className="wrapper">
          <div className={`line left flex-${leftLineFlex}`}>
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className="mask"
            ></motion.div>
          </div>
          <motion.div
            className="title"
            onHoverStart={() => setHoverState(true)}
            onHoverEnd={() => setHoverState(false)}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <h2>
              <motion.div
                variants={titleSlideUp}
                transition={transition}
                className="text"
              >
                {title}
              </motion.div>
            </h2>
          </motion.div>
          <div className="thumbnail" style={{ left: thumbnailPosition }}>
            <Image src={src} />
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className="mask"
            ></motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoverState ? 1 : 0,
              x: x - listPosition.left,
              y: y - listPosition.top,
            }}
            transition={{
              ease: "linear",
            }}
            className="floating-image"
          >
            <Image src={src} />
          </motion.div>
          <div className={`line right flex-${rightLineFlex}`}>
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className="mask right"
            ></motion.div>
          </div>
        </div>
      </Link>
    </li>
  )
}

// panel effect animation
const Panels = () => {
  // to change the background color after an effect is completed
  const [panelComplete, setPanelComplete] = useState(false)
  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
        exit={{ height: [0, window.innerHeight, 0], top: [null, 0, 0] }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className="left-panel-background"
        style={{ background: panelComplete ? "#e7e7de" : "#e7dee7" }}
      ></motion.div>
      <motion.div
        style={{ background: panelComplete ? "#e7e7de" : "#e7dee7" }}
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        exit={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        onAnimationComplete={() => {
          setPanelComplete(!panelComplete)
        }}
        className="right-panel-background"
      ></motion.div>
    </>
  )
}

export default Projects
