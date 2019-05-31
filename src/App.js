import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SideBar from './components/Sidebar'
import Navbar from './components/Navbar'
import Aboutme from './components/AboutMe'
import ProjectsListView from './components/ProjectsListView'
import ProjectsDetailedView from './components/ProjectsDetailedView'
import Courses from './components/Courses'
import Cv from './components/CV'
import Admin from './components/Admin/Admin'
import SignIn from './components/Admin/SignIn'

const App = () => {
  return (
    <>
      <Router>
        <SideBar />
        <Navbar />
        <div className="col-md-9 offset-md-3" id="main-content">
          <Route exact path="/" component={Aboutme} />
          <Route exact path="/projects" component={ProjectsListView} />
          <Route exact path="/projects/:projectID" component={ProjectsDetailedView} />
          <Route exact path="/courses/" component={Courses} />
          <Route exact path="/cv/" component={Cv} />
          <Route path="/admin/" component={Admin} />
          <Route exact path="/signin/" component={SignIn} />
          <br /><br /><br />
        </div>
      </Router>
    </>
  )
}

export default App
