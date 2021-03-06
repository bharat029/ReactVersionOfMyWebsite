import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import {Link} from 'react-router-dom';

const ProjectListView = ({ projects }) => {
  useEffect(() => {
    document.getElementById('main-content').scrollTop = 0
    document.querySelector('#mobile-nav').classList.remove('open');
  }, [])

  return (
    <>
      <Helmet>
        <title>Projects - Bharathan Mudaliar</title>
      </Helmet>
      <div className="row page-title">
        <h3>Projects</h3>
      </div>
      <div className="page-content">
        <p>All of my projects can be found <a className="text-white" href="https://github.com/bharat029/">here</a></p>
        <ul className="row project-row">
          {
            projects 
            // ? projects.map(project =><li key={project.id} className="col m6 s12"><Link className="white-text card grey darken-3 center-align project" to={"/projects/" + project.id}><h5 className="card-title">{project.title}</h5><p className="proj-desc">{project['s-desc']}</p></Link></li>) 
            ? projects.map(project =><li key={project.id} className="col l6 s12"><div className="white-text card grey darken-2"><div className="card-content"><h5 className="card-title truncate">{project.title}</h5><p>{project['s-desc']}</p><div className="card-action"><Link className="grey-text text-lighten-2" to={`/projects/${project.id}`}>Read More...</Link></div></div></div></li>) 
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
    { collection: 'projects', orderBy: ['createdOn', 'desc'] }
  ])
)(ProjectListView)
