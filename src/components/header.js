import React, { Component } from "react"
import { Link } from "react-router-dom"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <header>
        <div>
          <Link to="/home">Raymond Yen</Link>
        </div>
        <nav>
          <Link to="/about">about</Link>
          <Link to="/education">education</Link>
          <Link to="/projects">projects</Link>
          <Link to="/contact">contact</Link>
        </nav>
      </header>
    )
  }
}

export default Header