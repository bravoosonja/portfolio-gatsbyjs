import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <header>
      <div className="container fluid">
        <div className="header-inner">
          <Link activeClassName="active" to="/">
            Portfolio.
          </Link>
          <div className="hamburger-menu">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
