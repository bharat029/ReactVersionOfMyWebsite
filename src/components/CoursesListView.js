import React from 'react'

const CoursesListView = ({courses, offeredBy, certi, plateform}) => {
  return (
    <>
      <h4 style={{ fontSize: '1.5rem', padding: '2.5%', margin: '0' }}>List of Courses:</h4>
      <ul style={{ padding: '0 5%', margin: '0' }}>
        {
          courses.map(course => <li key={course.id} className="row"><a href={course.certi} rel="noopener noreferrer" target="_blank" className="white-text link-unstyled course"><h5 className="title truncate" style={{ fontSize: '1.20rem' }}>{course.title}</h5><span className="offeredBy left">{offeredBy}</span><span className="plateform right">{plateform}</span></a></li>)
        }
        <li><a href={certi} rel="noopener noreferrer" target="_blank" className="link-unstyled white-text"><small>See Specialization Certificate</small></a></li>
      </ul>
    </>
  )
}

export default CoursesListView
