import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addSpecialization, deleteSpecialization, deleteSCourse } from '../../../store/actions/courseActions'
import {Link} from 'react-router-dom';
import SpecializationForm from '../Forms/SpecializationForm'

class SpecializationsListView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ListView: true
    }
  } 

  changeView = () => {
    this.setState({
      ListView: true
    })
  }

  add = e => {
    this.setState({
      ListView: false
    })
	}
	
	delete = e => {
		const { scourses, deleteSCourse, deleteSpecialization } = this.props
		let sid = e.target.id
		scourses.filter(course => course.sid === sid).forEach(course => deleteSCourse(course.id))
		deleteSpecialization(sid)
		console.log(sid)
	}

  render() {
    const { specializations, addSpecialization } = this.props

		return (
      <>
        {
          this.state.ListView 
          ? <>
            <ul className="list-unstyled">
              {
                specializations  
                ? specializations.map((spec, idx) => <li key={spec.id} className="mt-3 ml-3 border rounded row"><Link to={ '/admin/courses/specializations/' + spec.id } className="text-white link-unstyled col-11">{ spec.title }</Link><button onClick={this.delete} id={spec.id} className="btn btn-outline-primary text-white col-1 p-0 m-0 border-0" style={{ fontSize: '1.75em' }}>&times;</button></li>) 
                : <p>Loading Data... Please wait!!</p>
              }
            </ul>
            <button onClick={this.add} className="btn btn-success m-5 col-md-2 col-6">Add</button>
          </>
          : <SpecializationForm changeView={this.changeView} add={addSpecialization} /> 
        }
      </>
    )
  }
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
    { collection: 'specializations', orderBy: ['createdOn', 'desc'] },
    { collection: 'scourses', orderBy: ['createdOn', 'desc'] }
  ])
)(SpecializationsListView)
  