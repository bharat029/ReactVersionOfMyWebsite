import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import Specialization from './Specialization'

const Course = ({ specializations, courses, scourses }) => {
  useEffect(() => {
    document.getElementById('main-content').scrollTop = 0
    document.querySelector('#mobile-nav').classList.remove('open');
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
        <div className="row">
          <ul>
            {
              specializations 
              ? specializations.map(specialization => <li key={specialization.id} className="row"><Specialization specialization={specialization} /></li>)
              : <p>Loading Data... Please wait!!</p>
            }
          </ul>
        </div>
      </div>
      <div className="row page-title">
        <h3>Courses</h3>
      </div>
      <div className="page-content">
        <div className="row">
          <ul>
            {
              courses 
              ? courses.map(course => <li key={course.id} className="row"><a href={course.certi} rel="noopener noreferrer" target="_blank" className="white-text link-unstyled col s11 course"><h5 className="title truncate">{course.title}</h5><span className="offeredBy left">{course.offeredBy}</span><span className="plateform right">{course.plateform}</span></a></li>)
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
