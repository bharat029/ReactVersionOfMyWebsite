import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addEducation, updateEducation, deleteEducation } from '../../../store/actions/cvActions'
import EducationForm from '../Forms/EducationForm'

const EducationListView = ({education, addEducation, updateEducation, deleteEducation}) => {
  const [state, setState] = useState({ListView: true, edu: null})

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
      edu: null
    })
  }

  const update = (e) => {
    setState({
      ...state,
      ListView: false,
      edu: education[e.target.id]
    })
  }

  return (
    <>
      {
        state.ListView 
        ? <>
          <ul>
            {
              education 
              ? education.map((edu, idx) => <li key={edu.id} className="border rounded row"><span onClick={update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ edu.edu }</span><button onClick={(e) => deleteEducation(e.target.id)} id={edu.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={add} className="btn green">Add</button>
        </>
        : <EducationForm edu={state.edu} changeView={changeView} add={addEducation}  update={updateEducation}  /> 
      }
    </>
  )
}

const mapStateToProp = (state) => {
    return {
        education: state.firestore.ordered.education
    }
  }
  
const mapDispatchToProp = dispatch => {
  return {
      addEducation: (edu) => dispatch(addEducation(edu)),
      updateEducation: (edu, id) => dispatch(updateEducation(edu, id)),
      deleteEducation: (id) => dispatch(deleteEducation(id))
  }
}
  
export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'education', orderBy: ['createdOn', 'desc'] }
  ])
)(EducationListView)
  