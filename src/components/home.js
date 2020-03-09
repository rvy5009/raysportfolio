import React, { Component } from "react"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1 className="home">
          Software Developer
          <div className="js">
            HTML, CSS, JavaScript, and React
          </div>
        </h1>

      </div>

    )
  }
}

export default Home