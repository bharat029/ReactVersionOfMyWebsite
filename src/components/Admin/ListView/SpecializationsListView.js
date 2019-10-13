import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addSpecialization, deleteSpecialization, deleteSCourse } from '../../../store/actions/courseActions'
import {Link} from 'react-router-dom';
import SpecializationForm from '../Forms/SpecializationForm'

const SpecializationsListView = ({scourses, specializations, deleteSCourse, deleteSpecialization, addSpecialization}) => {
  const [state, setState] = useState({ListView: true})

  const changeView = () => {
    setState({
      ...state,
      ListView: true
    })
  }

  const add = (e) => {
    setState({
      ...state,
      ListView: false
    })
	}
	
	const deleteS = (e) => {
		let sid = e.target.id
		scourses.filter(course => course.sid === sid).forEach(course => deleteSCourse(course.id))
		deleteSpecialization(sid)
		console.log(sid)
	}

	return (
    <>
      {
        state.ListView 
        ? <>
            <ul>
              {
                specializations  
                ? specializations.map((spec, idx) => <li key={spec.id} className="border rounded row"><Link to={ '/admin/courses/specializations/' + spec.id } className="white-text link-unstyled col s11">{ spec.title }</Link><button onClick={deleteS} id={spec.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>) 
                : <p>Loading Data... Please wait!!</p>
              }
            </ul>
            <button onClick={add} className="btn green">Add</button>
          </>
          : <SpecializationForm changeView={changeView} add={addSpecialization} /> 
        }
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    specializations: state.firestore.ordered.specializations,
    scourses: state.firestore.ordered.scourses
  }
}
  
const mapDispatchToProp = dispatch => {
  return {
    addSpecialization: (spec) => dispatch(addSpecialization(spec)),
    deleteSpecialization: (id) => dispatch(deleteSpecialization(id)),
    deleteSCourse: (id) => dispatch(deleteSCourse(id))
  }
}
  
export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'specializations', orderBy: ['createdOn'] },
    { collection: 'scourses', orderBy: ['createdOn'] }
  ])
)(SpecializationsListView)
  