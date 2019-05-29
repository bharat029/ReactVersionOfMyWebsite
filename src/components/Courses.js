import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import {Link} from 'react-router-dom';

const ProjectListView = ({ projects }) => {
  return (
    <>
      <Helmet>
        <title>Projects - Bharathan Mudaliar</title>
      </Helmet>
      <div id="page-title" className="row">
        <h3>Projects</h3>
      </div>
      <div id="page-content">
        <p>All of my projects can be found <a class="text-white" href="https://github.com/bharat029/">here</a></p>
        <div className="row mt-5">
          <ul className="list-unstyled col-11 offset-1">
          {
            projects 
            ? projects.map(project =><li key={project.id}><Link className="text-white" to={"/projects/" + project.id}><h5>{project.title}</h5></Link><p>{project['s-desc']}</p></li>) 
            : <p>Loading Data... Please wait!!</p>
          }
          </ul>
        </div>
      </div>
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectListView)
