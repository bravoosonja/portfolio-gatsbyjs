import React from "react"
import { Link } from "gatsby"
// icons
import { Close } from "../icons/icons"
// components
import { Image } from "./gatsby-images/image"
import data from "../data/projects.json"

const Menu = () => {
  return (
    <div className="projects">
      <div className="menu-title">Projects</div>
      <div className="close">
        <Close />
      </div>
      <div className="menu">
        <div className="container">
          <div className="menu-inner">
            <ul>
              {data.map(list => (
                <List
                  key={list.id}
                  title={list.title}
                  src={list.src}
                  leftLineFlex={list.leftLineFlex}
                  rightLineFlex={list.rightLineFlex}
                  thumbnailPosition={list.thumbnailPosition}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const List = ({
  title,
  src,
  leftLineFlex,
  rightLineFlex,
  thumbnailPosition,
}) => {
  return (
    <li>
      <Link to={`/projects/a`}>
        <div className="wrapper">
          <div className={`line left flex-${leftLineFlex}`}>
            {/* <div className="mask"></div> */}
          </div>
          <div className="title">
            <h2>
              <div className="text">{title}</div>
            </h2>
          </div>
          <div className="thumbnail" style={{ left: thumbnailPosition }}>
            <Image src={src} />
            {/* <div className="mask"></div> */}
          </div>
          <div className="floating-image">
            <Image src={src} />
          </div>
          <div className={`line right flex-${rightLineFlex}`}>
            {/* <div className="mask right"></div> */}
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Menu
