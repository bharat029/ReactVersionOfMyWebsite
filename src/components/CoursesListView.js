import React from 'react'

const CoursesListView = ({courses, offeredBy, certi, plateform}) => {
  return (
    <div className="m-2 border rounded">
      <h4 className="h6 pl-1">List of Courses</h4>
      <ul className="list-unstyled">
        {
          courses.map(course => <li key={course.id} className="row m-1 mt-2"><a href={course.certi} rel="noopener noreferrer" target="_blank" className="text-white d-block course"><h5 className="title p-0 m-0">{course.title}</h5><small className="offeredBy float-left p-0 m-0">{offeredBy}</small><small className="plateform float-right p-0 m-0">{plateform}</small></a></li>)
        }
        <li><a href={certi} rel="noopener noreferrer" target="_blank" className="d-block text-white"><small>See Specialization Certificate</small></a></li>
      </ul>
    </div>
  )
}

export default CoursesListView
