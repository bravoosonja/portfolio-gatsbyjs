import React from "react"
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

const Menu = ({ menuState, setMenuState }) => {
  return (
    <>
      <AnimatePresence>
        {menuState && (
          <motion.div exit={{ opacity: 0 }} className="projects">
            <div className="menu-title">Projects</div>
            <div onClick={() => setMenuState(false)} className="close">
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
                      />
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const List = ({
  title,
  src,
  leftLineFlex,
  rightLineFlex,
  thumbnailPosition,
  id,
}) => {
  return (
    <li>
      <Link to={`/projects/${id}`}>
        <div className="wrapper">
          <div className={`line left flex-${leftLineFlex}`}>
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className="mask"
            ></motion.div>
          </div>
          <div className="title">
            <h2>
              <motion.div
                variants={titleSlideUp}
                transition={transition}
                className="text"
              >
                {title}
              </motion.div>
            </h2>
          </div>
          <div className="thumbnail" style={{ left: thumbnailPosition }}>
            <Image src={src} />
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className="mask"
            ></motion.div>
          </div>
          <div className="floating-image">
            <Image src={src} />
          </div>
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

export default Menu
