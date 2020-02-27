import React, { Component } from "react"
import Pdf from "../info/resume.pdf"

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1 className="about">
          About
        </h1>
        <div className="myAbout">
          <img src="asds" alt="picturesd" />
          <div className="aboutWords">
          I am a solutions-oriented and innovative Software Engineer who holds seven years’ experience leading the operations for a small business in the transportation industry. As both a Web Developer and Automotive Technician, I have an innate ability to self-learn complicated concepts and translate this to intuitive solutions for the teams I manage and the clients I support. I seek the opportunity to work in a collaborative, client-facing team that places consumer experience at the center of what they do.
          </div>  
          <a href={Pdf} download="Raymond Yen Resume">Resume</a>
          <div>
           Skills
          </div>
        </div>

      </div>  
    )
  }
}

export default About