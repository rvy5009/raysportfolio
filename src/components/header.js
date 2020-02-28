import React, { Component } from "react"
import { Link } from "react-router-dom"
import computer from "../info/computer.jpg"

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
            <Link to="/home" className="homeLink">
              Raymond Yen
            </Link>
          </div>
          <nav>
            <Link to="/about" className="nav">About</Link>
            <Link to="/projects" className="nav">Projects</Link>
            <Link to="/contact" className="nav">Contact</Link>
          </nav>

        </header>
        <div className="computerWrapper">
            <img src={computer} className="computer" alt="computer" />        
        </div>
      </div>
    )
  }
}

export default Header