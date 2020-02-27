import React, { Component } from "react"
import { Link } from "react-router-dom"
import nyc from "../info/heroimage.jpeg"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <header>
          <div>
            <Link to="/home">Raymond Yen</Link>
          </div>
          <nav>
            <Link to="/about">about</Link>
            <Link to="/projects">projects</Link>
            <Link to="/contact">contact</Link>
          </nav>

        </header>
        <div>
            <img src={nyc} className="nyc" alt="nyc" />        
        </div>
      </div>
    )
  }
}

export default Header