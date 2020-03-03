import React, { Component } from "react";
import self from "../info/self.jpg";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className="about">About</h1>
        <div className="myAbout">
          <div className="selfPicWrapper">
            <img src={self} alt="picturesd" className="selfPic" />
          </div>
          <div className="aboutWords">
            I am a solutions-oriented and innovative Software Engineer who holds
            seven years’ experience leading the operations for a small business
            in the transportation industry. As both a Web Developer and
            Automotive Technician, I have an innate ability to self-learn
            complicated concepts and translate this to intuitive solutions for
            the teams I manage and the clients I support. I seek the opportunity
            to work in a collaborative, client-facing team that places consumer
            experience at the center of what they do.
          </div>
          <h2>
            <a href="https://drive.google.com/u/0/uc?id=1_B_wca9VVRYsu38EZlskuzzjAUwbKwOI&export=download" target=" " download="Raymond Yen Resume">
              Download Resume
            </a>
          </h2>
          <div className="myContact">
            <h2>
              <a href="mailto:rvy5009@gmail.com" target=" ">
                rvy5009@gmail.com
              </a>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
