import React, { Component } from "react"

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1 className="contact">
          Contact
        </h1>
        <div className="myContact">
          <h2><a href="mailto:rvy5009@gmail.com" target=" ">Email me</a></h2>
        </div>
      </div>
    )
  }
}

export default Contact