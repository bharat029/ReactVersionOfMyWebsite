import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {NavLink} from 'react-router-dom';
import AboutMeListView from './ListView/AboutMeListView'
import ProjectListView from './ListView/ProjectsListView'
import CourseSection from './ListView/CourseSection'
import CoursesListView from './ListView/CoursesListView'
import SpecializationsListView from './ListView/SpecializationsListView'
import SpecializationsDetailedView from './ListView/SpecializationsDetailedView'
import CVListView from './ListView/CVListView'
import EducationListView from './ListView/EducationListView'
import InternshipsListView from './ListView/InternshipsListView'
import PIListView from './ListView/PIListView'
import CSListView from './ListView/CSListView'
import PORListView from './ListView/PORListView'
import HackathonListView from './ListView/HackathonListView'
import VEListView from './ListView/VEListView'
import InterestListView from './ListView/InterestListView'

const Admin = ({ auth, signOut }) => {
  if(auth.uid){
    return (
      <>
        <Helmet>
          <title>Admin - Bharathan Mudaliar</title> 
        </Helmet>
        <div className="page">
          <div className="row page-title">
            <h2 className="col-10">Welcome Bharat</h2>
            <div className="ol-2"><button className="btn btn-primary" onClick={() => signOut()}>Log Out</button></div>
          </div>
          <div id="page-content">
            <Router>
              <div className="row ml-1">
                <div className="col-3"><NavLink exact to="/admin/" className="admin-navi d-block">About Me</NavLink></div>
                <div className="col-3"><NavLink to="/admin/projects" className="admin-navi d-block">Projects</NavLink></div> 
                <div className="col-3"><NavLink to="/admin/courses" className="admin-navi d-block">Courses</NavLink></div> 
                <div className="col-3"><NavLink to="/admin/cv" className="admin-navi d-block">CV</NavLink></div> 
              </div>
              <Route exact path="/admin/" component={AboutMeListView} />
              <Route path="/admin/projects" component={ProjectListView} />
              <Route exact path="/admin/courses" component={CourseSection} />
              <Route path="/admin/courses/courses" component={CoursesListView} />
              <Route exact path="/admin/courses/specializations" component={SpecializationsListView} />
              <Route path="/admin/courses/specializations/:sid" component={SpecializationsDetailedView} />
              <Route exact path="/admin/cv" component={CVListView} />
              <Route path="/admin/cv/education" component={EducationListView} />
              <Route path="/admin/cv/professionalinterest" component={PIListView} />
              <Route path="/admin/cv/skills" component={CSListView} />
              <Route path="/admin/cv/por" component={PORListView} />
              <Route path="/admin/cv/hackathon" component={HackathonListView} />
              <Route path="/admin/cv/ve" component={VEListView} />
              <Route path="/admin/cv/interest" component={InterestListView} />
              <Route path="/admin/cv/internships" component={InternshipsListView} />
            </Router>
          </div>
        </div>  
      </>
    )
  } else {
      return <Redirect to="/signin" />
  }
}

const mapStateToProp = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProp = dispatch => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(Admin)
