import React, { Component } from "react"

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <a href="http://raytimes.surge.sh/" target=" ">Ray Times</a>
        <a href="http://keeping-deploy.s3-website-us-east-1.amazonaws.com/" target=" ">Keep Fitness</a>
        <a href="http://cornerbistro.surge.sh/" target=" ">Corner Bistro</a>
        <a href="http://raysp3.surge.sh/" target=" ">Foodstagram</a>
      
      </div>
    )
  }
}

export default Projects