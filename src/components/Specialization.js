import React, {useState} from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import CoursesListView from './CoursesListView'

const Specialization = ({ specialization, scourses }) => {
  const initialState = { courses: null, display: false }
  const [state, setState] = useState(initialState)
  let courseList = React.createRef()

  const setCourse = e => {
    if(state.courses){
      if(state.display){
        console.log(courseList.current.firstChild)
        courseList.current.firstChild.classList = "m-2 border course-list hide rounded"
        setTimeout(() => {
          setState({ ...state, display: false })
        }, 500)
      } else {
        setState({ ...state, display: true })
      }
    } else {
      let courses = scourses && scourses.filter(course => course.sid === specialization.id)
      setState({ courses, display: true })
    }
  }


  return (
    <>
      <div role="button" onClick={setCourse} id={specialization.id} className="col-md-6 col-11 specialization">
        <h5 className="title p-0 m-0">{specialization.title}</h5>
        <span className="offeredBy float-left p-0 m-0">{specialization.offeredBy}</span>
        <span className="plateform float-right p-0 m-0">{specialization.plateform}</span>
      </div>
      { 
        state.display 
        ? <div ref={courseList} className="col-md-6 col-11">
            <div className="m-2 course-list border show rounded">
              <CoursesListView courses={state.courses} offeredBy={specialization.offeredBy} plateform={specialization.plateform} certi={specialization.certi} />
            </div>
          </div>
        : null
      }
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    scourses: state.firestore.ordered.scourses
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'scourses', orderBy: ['createdOn'] }
  ])
)(Specialization)
