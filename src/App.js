import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Header from "./components/header"
import './App.css'
import Contact from "./components/contact"
import Projects from "./components/projects"
import About from "./components/about"
import Home from "./components/home"
import Footer from "./components/footer"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
        <Route exact path="/" render={() => (
          <Home />
        )} />
        <Route exact path="/contact" render={() => (
          <Contact />
        )} />
        <Route exact path="/projects" render={() => (
          <Projects />
        )} />
        <Route exact path="/about" render={() => (
          <About />
        )} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
