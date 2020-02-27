import React, { Component } from 'react'
import {Link, Route} from "react-router-dom"
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">


        <Header></Header>
        <section id="about">
          about
        </section>
        
        <section id="projects" className="projects">Projects
        <a href="http://raytimes.surge.sh/" target=" ">Ray Times</a>
        <a href="http://keeping-deploy.s3-website-us-east-1.amazonaws.com/" target=" ">Keep Fitness</a>
        <a href="http://cornerbistro.surge.sh/" target=" ">Corner Bistro</a>
        <a href="http://raysp3.surge.sh/" target=" ">Foodstagram</a>
        </section>



        <section id="contact">
          contact
        </section>
      </div>
    )
  }
}

export default App
