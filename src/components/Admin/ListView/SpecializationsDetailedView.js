import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addSCourse, updateSCourse, deleteSCourse, updateSpecialization } from '../../../store/actions/courseActions'
import SCourseFrom from '../Forms/SCourseFrom'
import SpecializationForm from '../Forms/SpecializationForm'

class SpecializationsDetailedView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       View: 0,
       specialization: null,
       course: null
    }
  } 

  changeView = () => {
    this.setState({
      View: 0
    })
  }

  add = e => {
    this.setState({
      View: 1,
      course: null
    })
  }

  updateS = (e) => {
    this.setState({
      View: 2,
      specialization: this.props.specialization
    })
  }

  updateC = (e) => {
    this.setState({
      View: 1,
      course: this.props.scourses[e.target.id]
    })
  }

  render() {
    const { scourses, addSCourse, updateSCourse, deleteSCourse, updateSpecialization } = this.props

    return (
      <>
      {
        this.state.View === 0
        ? <>
          <ul className="list-unstyled">
            {
              scourses 
              ? scourses.map((course, idx) => <li key={course.id} className="mt-3 ml-3 border rounded row"><span onClick={this.updateC} id={idx} style={{ cursor: "pointer" }} className="col-11">{ course.title }</span><button onClick={(e) => deleteSCourse(e.target.id)} id={course.id} className="btn btn-outline-primary text-white col-1 p-0 m-0 border-0" style={{ fontSize: '1.75em' }}>&times;</button></li>) 
              : <p>Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={this.add} className="btn btn-success m-5 col-md-2 col-6">Add</button>
          <button onClick={this.updateS} className="btn btn-success m-5 col-md-2 col-6">Update</button>
        </>
        : this.state.View === 1 
        ? <SCourseFrom course={this.state.course} sid={this.props.match.params.sid} changeView={this.changeView} add={addSCourse}  update={updateSCourse}  /> 
        : <SpecializationForm course={this.state.specialization} sid={this.props.match.params.sid} changeView={this.changeView} update={updateSpecialization}  /> 
      }
      </>
    )
  }
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
    { collection: 'scourses', orderBy: ['createdOn', 'desc'] }
  ])
)(SpecializationsDetailedView)
  