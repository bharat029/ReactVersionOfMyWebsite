import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const ProjectsDetailedView = ({project}) => {
	useEffect(() => {
		document.getElementById('main-content').scrollTop = 0
		document.querySelector('#mobile-nav').classList.remove('open');
	}, [])
	
	return (
		<>
		<Helmet>
			<title>Projects - Bharathan Mudaliar</title>
		</Helmet>
		{
			project 
			? <div id="project-details">
					<div className="row page-title">
						<h3>{project.title}</h3>
					</div>
					<div className="page-content">
						{project['desc-1'] && <p>{project['desc-1']}</p>}
						{project['desc-2'] && <p>{project['desc-2']}</p>}
						{project['desc-3'] && <p>{project['desc-3']}</p>}
						<h4>Highlights:</h4>
						<ul className="browser-default">
							{project['high-1'] && <li>{project['high-1']}</li>}
							{project['high-2'] && <li>{project['high-2']}</li>}
							{project['high-3'] && <li>{project['high-3']}</li>}
							{project['high-4'] && <li>{project['high-4']}</li>}
							{project['high-5'] && <li>{project['high-5']}</li>}
						</ul>
						<br /><br />
						<a href={project.repo} className="text-white">See Repository</a>
					</div>
				</div>
				: <h3>Project Not Found</h3>
			}
		</>
  )
}

const mapStateToProp = (state, ownProps) => {
  return {
    project: state.firestore.data.projects && state.firestore.data.projects[ownProps.match.params.projectID]
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectsDetailedView)
