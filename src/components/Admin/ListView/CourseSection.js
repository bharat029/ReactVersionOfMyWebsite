import React from 'react'
import {Link} from 'react-router-dom';

const CVListView = () => {
  return (
    <>
      <Link to="/admin/courses/specializations" className="mt-3 ml-3 text-white link-unstyled pl-5 border rounded row">Specializations</Link>
      <Link to="/admin/courses/courses" className="mt-3 ml-3 text-white link-unstyled pl-5 border rounded row">Courses</Link>
    </>
  )
}

export default CVListView
