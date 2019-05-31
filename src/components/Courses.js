import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import CoursesListView from './CoursesListView'

const Course = ({ specializations, courses, scourses }) => {
  const initState = {
    courses: null
  }

  const [state, setState] = useState(initState)

  const setCourse = (e) => {
    const id = e.target.id || e.target.parentElement.id

    setState(prevState => {
      return { courses: prevState.courses ? null : scourses.filter(course => course.sid === id) }
    })
  }

  return (
    <>
      <Helmet>
        <title>Courses - Bharathan Mudaliar</title>
      </Helmet>
      <div className="row page-title">
        <h3>Specializations</h3>
      </div>
      <div className="page-content">
        <div className="row mt-5">
          <ul className="list-unstyled container-fluid">
            {
              specializations 
              ? specializations.map(specialization => <li key={specialization.id} className="row ml-1"><div role="button" onClick={setCourse} id={specialization.id} className="col-md-6 col-11 specialization"><h5 className="title p-0 m-0">{specialization.title}</h5><small className="offeredBy float-left p-0 m-0">{specialization.offeredBy}</small><small className="plateform float-right p-0 m-0">{specialization.plateform}</small></div>{ state.courses && <div className="col-md-6"><CoursesListView courses={state.courses} offeredBy={specialization.offeredBy} plateform={specialization.plateform} certi={specialization.certi} /></div> }</li>)
              : <p>Loading Data... Please wait!!</p>
            }
          </ul>
        </div>
      </div>
      <div className="row page-title">
        <h3>Courses</h3>
      </div>
      <div id="page-content">
        <div className="row mt-5">
          <ul className="list-unstyled container-fluid">
            {
              courses 
              ? courses.map(course => <li key={course.id} className="row ml-1"><a href={course.certi} rel="noopener noreferrer" target="_blank" className="text-white d-block col-11 course"><h5 className="title p-0 m-0">{course.title}</h5><small className="offeredBy float-left p-0 m-0">{course.offeredBy}</small><small className="plateform float-right p-0 m-0">{course.plateform}</small></a></li>)
              : <p>Loading Data... Please wait!!</p>
            }
          </ul>
        </div>
      </div>
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    specializations: state.firestore.ordered.specializations,
    courses: state.firestore.ordered.courses,
    scourses: state.firestore.ordered.scourses
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'specializations', orderBy: ['createdOn', 'desc'] },
    { collection: 'courses', orderBy: ['createdOn', 'desc'] },
    { collection: 'scourses', orderBy: ['createdOn', 'desc'] }
  ])
)(Course)
