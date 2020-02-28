import React, { Component } from "react"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <footer>
          <div>@2020 Raymond Yen </div>
          <div className="outerFooter">
            <div className="innerFooter">
              <a href="https://github.com/rvy5009" target=" ">
                Github
              </a>
            </div>
            <div className="innerFooter">
              <a href="https://www.linkedin.com/in/raymond-yen/" target="">
                Linkedin
              </a>
            </div>
          </div>
        </footer>

      </div>
    )
  }
}
// https://www.linkedin.com/in/raymond-yen/

export default Header