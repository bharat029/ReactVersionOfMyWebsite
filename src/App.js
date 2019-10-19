import React, { lazy, Suspense, useEffect } from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import M from 'materialize-css'

const Aboutme = lazy(() => import('./components/AboutMe'))
const ProjectsListView = lazy(() => import('./components/ProjectsListView'))
const ProjectsDetailedView = lazy(() => import('./components/ProjectsDetailedView'))
const Courses = lazy(() => import('./components/Courses'))
const CV = lazy(() => import('./components/CV'))
const Admin = lazy(() => import('./components/Admin/Admin'))
const SignIn = lazy(() => import('./components/Admin/SignIn'))

const App = () => { 
  useEffect(() => {
    M.AutoInit()
  }, [])

  return (
    <div className="row" style={{ padding: '0', margin: '0' }}>
      <Router>
        <Navbar />
        <div id="sidebar" className="sidenav black">
          <Sidebar />
        </div>
        <div id="side-large" className="col m3 hide-on-small-and-down black">
          <Sidebar />
        </div>
        <div className="col m9 s12 offset-m3" id="main-content">
          <Suspense fallback="<div>Loadiing...</div>">
            <Route exact path="/" component={Aboutme} />
            <Route exact path="/projects" component={ProjectsListView} />
            <Route exact path="/projects/:projectID" component={ProjectsDetailedView} />
            <Route exact path="/courses/" component={Courses} />
            <Route exact path="/cv/" component={CV} />
            <Route path="/admin/" component={Admin} />
            <Route exact path="/signin/" component={SignIn} />
            <br /><br /><br />
          </Suspense>
        </div>
      </Router>
    </div>
  )
}

export default App
