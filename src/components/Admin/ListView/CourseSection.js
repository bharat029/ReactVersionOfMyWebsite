import React from 'react'
import {Link} from 'react-router-dom';

const CourseSection = () => {
  return (
    <>
      <Link to="/admin/courses/specializations" style={{ display: 'block', padding: '5px 5px 5px 15px' }} className="white-text link-unstyled border rounded row">Specializations</Link>
      <Link to="/admin/courses/courses" style={{ display: 'block', padding: '5px 5px 5px 15px' }} className="white-text link-unstyled border rounded row">Courses</Link>
    </>
  )
}

export default CourseSection
