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
        <ul className="list-unstyled row mt-5 pl-4">
          {
            projects 
            ? projects.map(project =><li key={project.id} className="col-md-6" style={{ margin: "0", padding: "0" }}><Link className="text-white project" to={"/projects/" + project.id}><h5>{project.title}</h5><p className="mt-2 mb-2">{project['s-desc']}</p></Link></li>) 
            : <p>Loading Data... Please wait!!</p>
          }
        </ul>
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
