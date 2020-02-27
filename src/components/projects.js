import React, { Component } from "react"
import food from "../info/foodstagram.png"
import raytimes from "../info/raytimes.png"
import corner from "../info/corner.png"
class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1 className="projects">
          Projects          
        </h1>
        <div className="myProjects">
          <div className="projectwrapper">
            <h2><a href="http://raytimes.surge.sh/" target=" ">Ray Times</a></h2>
            <div className="projectInWrap">            <img src={raytimes} alt="Raytimes" className="projectImage" />
            <div className="projectInner">            A copy of the New York Times Website
            <div>Technology Used:
            React</div></div></div>


          </div>

          <div className="projectwrapper">
          <h2><a href="http://cornerbistro.surge.sh/" target=" ">Corner Bistro</a></h2>
          
          </div>
          <div className="projectInWrap">           <img src={corner} alt="Corner Bistro" className="projectImage"/>
            <div className="projectInner">          
            A colloboration with UX designers
               to redesign a local eatery
                
            <div>Technology Used:
            React</div></div></div>
          

          <div className="projectwrapper">
          <h2><a href="http://raysp3.surge.sh/" target=" ">Foodstagram</a></h2>
          
          </div>
          <div className="projectInWrap">            <img src={food} alt="Foodstagram" className="projectImage" />
            <div className="projectInner">            
              Instagram except for foodies
            <div>Technology Used:
            React Node Express</div></div></div>
        </div>
      </div>
    )
  }
}

export default Projects