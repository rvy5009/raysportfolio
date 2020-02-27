import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <header>
        Raymond Yen
        <nav>
          <Link to="/about">about</Link>
          <Link to="/education">education</Link>
          <Link to="/projects">projects</Link>
          <Link to="/experience">contact</Link>
        </nav>
      </header>
    )
  }
}

export default withRouter(Header)