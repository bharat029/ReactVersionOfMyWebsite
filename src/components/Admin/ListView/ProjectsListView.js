import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addProject, updateProject, deleteProject } from '../../../store/actions/projectActions'
import ProjectForm from '../Forms/ProjectForm'

const ProjectsListView = ({projects, addProject, updateProject, deleteProject}) => {
  const [state, setState] = useState({ListView: true, project: null})

  const changeView = () => {
    setState({
      ...state,
      ListView: true
    })
  }

  const add = (e) => {
    setState({
      ...state,
      ListView: false,
      project: null
    })
  }

  const update = (e) => {
    setState({
      ...state,
      ListView: false,
      project: projects[e.target.id]
    })
  }

  return (
    <>
      {
        state.ListView 
        ? <>
          <ul>
            {
              projects ? 
              projects.map((project, idx) => <li key={project.id} className="border rounded row"><span onClick={update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ project.title }</span><button onClick={(e) => deleteProject(e.target.id)} id={project.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>) 
              : <p>Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={add} className="btn green">Add</button>
        </>
        : <ProjectForm project={state.project} changeView={changeView} add={addProject}  update={updateProject}  /> 
      }
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    projects: state.firestore.ordered.projects
  }
}
  
const mapDispatchToProp = dispatch => {
  return {
    addProject: (project) => dispatch(addProject(project)),
    updateProject: (project, id) => dispatch(updateProject(project, id)),
    deleteProject: (id) => dispatch(deleteProject(id))
  }
}
  
export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdOn', 'desc'] }
  ])
)(ProjectsListView)
  