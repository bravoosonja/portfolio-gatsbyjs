import React from "react"
import { Link } from "gatsby"
// icons
import { Close } from "../icons/icons"
// components
import { Image } from "./gatsby-images/image"

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
              <li>
                <Link to={`/projects/a`}>
                  <div className="wrapper">
                    <div className="line left">
                      {/* <div className="mask"></div> */}
                    </div>
                    <div className="title">
                      <h2>
                        <div className="text">Shopping Cart</div>
                      </h2>
                    </div>
                    <div className="thumbnail">
                      <Image src={1} />
                      {/* <div className="mask"></div> */}
                    </div>
                    <div className="floating-image">
                      <Image src={1} />
                    </div>
                    <div className="line right">
                      {/* <div className="mask right"></div> */}
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
