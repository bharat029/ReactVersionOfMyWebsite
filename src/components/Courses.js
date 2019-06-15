import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import Specialization from './Specialization'

const Course = ({ specializations, courses, scourses }) => {
  useEffect(() => {
		document.getElementById('main-content').scrollTop = 0
  }, [])

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
              ? specializations.map(specialization => <li key={specialization.id} className="row mb-3 ml-1"><Specialization specialization={specialization} /></li>)
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
              ? courses.map(course => <li key={course.id} className="row ml-1"><a href={course.certi} rel="noopener noreferrer" target="_blank" className="text-white link-unstyled d-block mb-3 col-11 course"><h5 className="title p-0 m-0">{course.title}</h5><span className="offeredBy float-left p-0 m-0">{course.offeredBy}</span><span className="plateform float-right p-0 m-0">{course.plateform}</span></a></li>)
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
    { collection: 'specializations', orderBy: ['createdOn'] },
    { collection: 'courses', orderBy: ['createdOn'] },
    { collection: 'scourses', orderBy: ['createdOn'] }
  ])
)(Course)
