import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addCourse, updateCourse, deleteCourse } from '../../../store/actions/courseActions'
import CourseForm from '../Forms/CourseForm'

const CoursesListView = ({courses, addCourse, updateCourse, deleteCourse}) => {
  const [state, setState] = useState({ListView: true, course: null})

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
      course: null
    })
  }

  const update = (e) => {
    setState({
      ...state,
      ListView: false,
      course: courses[e.target.id]
    })
  }

  return (
    <>
        {
          state.ListView 
          ? <>
            <ul>
              {
                courses  
                ? courses.map((course, idx) => <li key={course.id} className="border rounded row"><span onClick={update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ course.title }</span><button onClick={(e) => deleteCourse(e.target.id)} id={course.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>) 
                : <p>Loading Data... Please wait!!</p>
              }
            </ul>
            <button onClick={add} className="btn green">Add</button>
          </>
          : <CourseForm course={state.course} changeView={changeView} add={addCourse}  update={updateCourse}  /> 
        }
    </>
  )
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
  