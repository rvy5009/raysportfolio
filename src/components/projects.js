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
          <div className="projectWrapper">
            <h2>
              <a href="http://raysp3.surge.sh/" target=" ">Foodstagram</a>
            </h2>          
          </div>
          <div className="projectInWrap">
            <a href="http://raysp3.surge.sh/" target=" ">
              <img src={food} alt="Foodstagram" className="projectImage" />
            </a>
            <div className="projectInner">            
              Instagram for foodies
              <div className="tech">
                Technology Used:
              </div>
              <div className="react">
                <div>React</div>
                <div>Node</div>
                <div>Express</div>                 
              </div>               
            </div>
          </div>


          <div className="projectWrapper">
            <h2>
              <a href="http://cornerbistro.surge.sh/" target=" ">Corner Bistro</a>
            </h2>         
          </div>
          <div className="projectInWrap">
            <a href="http://cornerbistro.surge.sh/" target=" ">
              <img src={corner} alt="Corner Bistro" className="projectImage" />
            </a>
            <div className="projectInner">          
            A colloboration with UX designers
                   to redesign a local eatery                
              <div className="tech">
                Technology Used:
              </div>  
              <div className="react">
                  React
              </div>                                
            </div>
          </div>          

          <div className="projectWrapper">
            <h2>
              <a href="http://raytimes.surge.sh/" target=" ">Ray Times</a>
            </h2>
            <div className="projectInWrap">
              <a href="http://raytimes.surge.sh/" target=" ">
                <img src={raytimes} alt="Raytimes" className="projectImage" />
              </a>
              <div className="projectInner">            
              A copy of the New York Times Website
                <div className="tech">
                  Technology Used:
                </div>  
                <div className="react">
                  React
                </div>              
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects