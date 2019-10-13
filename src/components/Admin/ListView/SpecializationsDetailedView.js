import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addSCourse, updateSCourse, deleteSCourse, updateSpecialization } from '../../../store/actions/courseActions'
import SCourseFrom from '../Forms/SCourseFrom'
import SpecializationForm from '../Forms/SpecializationForm'

const SpecializationsDetailedView = ({scourses, match, specialization, addSCourse, updateSCourse, deleteSCourse, updateSpecialization}) => {
  const [state, setState] = useState({View: 0, specialization: null,course: null})
  
  const changeView = () => {
    setState({
      ...state,
      View: 0
    })
  }

  const add = (e) => {
    setState({
      ...state,
      View: 1,
      course: null
    })
  }

  const updateS = (e) => {
    setState({
      ...state,
      View: 2,
      specialization: specialization
    })
  }

  const updateC = (e) => {
    setState({
      ...state,
      View: 1,
      course: scourses[e.target.id]
    })
  }

  return (
    <>
      {
        state.View === 0
        ? <>
          <ul>
            {
              scourses 
              ? scourses.map((course, idx) => <li key={course.id} className="border rounded row"><span onClick={updateC} id={idx} style={{ cursor: "pointer" }} className="col s11">{ course.title }</span><button onClick={(e) => deleteSCourse(e.target.id)} id={course.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>) 
              : <p>Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={add} className="btn green">Add</button>
          <button onClick={updateS} className="btn green right">Update</button>
        </>
        : state.View === 1 
        ? <SCourseFrom course={state.course} sid={match.params.sid} changeView={changeView} add={addSCourse}  update={updateSCourse}  /> 
        : <SpecializationForm course={state.specialization} sid={match.params.sid} changeView={changeView} update={updateSpecialization}  /> 
      }
    </>
  )
}

const mapStateToProp = (state, ownProps) => {
  let scourses = state.firestore.ordered.scourses ? state.firestore.ordered.scourses.filter(course => course.sid === ownProps.match.params.sid) : null
  return {
    specialization: state.firestore.data.specializations && state.firestore.data.specializations[ownProps.match.params.sid],
    scourses
  }
}
  
const mapDispatchToProp = dispatch => {
  return {
    addSCourse: (course) => dispatch(addSCourse(course)),
    updateSCourse: (course, id) => dispatch(updateSCourse(course, id)),
    updateSpecialization: (spec, id) => dispatch(updateSpecialization(spec, id)),
    deleteSCourse: (id) => dispatch(deleteSCourse(id))
  }
}
  
export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'specializations' },
    { collection: 'scourses', orderBy: ['createdOn'] }
  ])
)(SpecializationsDetailedView)
  