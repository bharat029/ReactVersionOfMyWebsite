import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addCourse, updateCourse, deleteCourse } from '../../../store/actions/courseActions'
import CourseForm from '../Forms/CourseForm'

class CoursesListView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ListView: true,
       course: null
    }
  } 

  changeView = () => {
    this.setState({
      ListView: true
    })
  }

  add = e => {
    this.setState({
      ListView: false,
      course: null
    })
  }

  update = (e) => {
    this.setState({
      ListView: false,
      course: this.props.courses[e.target.id]
    })
  }

  render() {
    const { courses, addCourse, updateCourse, deleteCourse } = this.props

    return (
      <>
        {
          this.state.ListView 
          ? <>
            <ul>
              {
                courses  
                ? courses.map((course, idx) => <li key={course.id} className="border rounded row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ course.title }</span><button onClick={(e) => deleteCourse(e.target.id)} id={course.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>) 
                : <p>Loading Data... Please wait!!</p>
              }
            </ul>
            <button onClick={this.add} className="btn green">Add</button>
          </>
          : <CourseForm course={this.state.course} changeView={this.changeView} add={addCourse}  update={updateCourse}  /> 
        }
      </>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    courses: state.firestore.ordered.courses
  }
}
  
const mapDispatchToProp = dispatch => {
  return {
    addCourse: (course) => dispatch(addCourse(course)),
    updateCourse: (course, id) => dispatch(updateCourse(course, id)),
    deleteCourse: (id) => dispatch(deleteCourse(id))
  }
}
  
export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'courses', orderBy: ['createdOn'] }
  ])
)(CoursesListView)
  