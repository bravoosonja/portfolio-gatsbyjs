import React, { useEffect } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

const Header = ({ setMenuState }) => {
  // close hamburger menu upon navigation
  const location = useLocation()

  useEffect(() => {
    setMenuState(false)
  }, [location])

  return (
    <header>
      <div className="container fluid">
        <div className="header-inner">
          <Link activeClassName="active" to="/">
            Portfolio.
          </Link>
          <div onClick={() => setMenuState(true)} className="hamburger-menu">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
