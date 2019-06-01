import React from 'react'

const CoursesListView = ({courses, offeredBy, certi, plateform}) => {
  return (
    <div id="course-list" className="m-2 border rounded">
      <h4 className="h6 pl-1 m-1">List of Courses:</h4>
      <ul className="list-unstyled">
        {
          courses.map(course => <li key={course.id} className="row m-1 mt-3 mt-2"><a href={course.certi} rel="noopener noreferrer" target="_blank" className="text-white link-unstyled d-block course"><h5 className="title p-0 m-0">{course.title}</h5><span className="offeredBy float-left p-0 m-0">{offeredBy}</span><span className="plateform float-right p-0 m-0">{plateform}</span></a></li>)
        }
        <li><a href={certi} rel="noopener noreferrer" target="_blank" className="d-block link-unstyled text-white"><small>See Specialization Certificate</small></a></li>
      </ul>
    </div>
  )
}

export default CoursesListView
