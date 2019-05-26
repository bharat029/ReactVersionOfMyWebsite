import React, {Component} from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SideBar from './components/Sidebar'
import Navbar from './components/Navbar'
import Aboutme from './components/AboutMe'
import ProjectsListView from './components/ProjectsListView'
import SkillSets from './components/SkillSets'
import Cv from './components/CV'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <SideBar />
          <Navbar />
          <div className="col-md-9 offset-md-3" id="main-content">
            <Route exact path="/" component={Aboutme} />
            <br /><br /><br />
          </div>
        </Router>
      </>
    )
  }
}

export default App
