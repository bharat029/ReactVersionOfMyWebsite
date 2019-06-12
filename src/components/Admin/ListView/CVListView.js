import React from 'react'
import {Link} from 'react-router-dom';

const CVListView = () => {
  return (
    <div id="cv-link">
      <Link to="/admin/cv/education" className="mt-3 ml-3 text-white link-unstyled rounded pl-5 border row">Education</Link>
      <Link to="/admin/cv/professionalInterest" className="mt-3 text-white link-unstyled ml-3 rounded pl-5 border row">Professional Interests</Link>
      <Link to="/admin/cv/skills" className="mt-3 text-white link-unstyled ml-3 rounded pl-5 border row">Computer Skills</Link>
      <Link to="/admin/cv/por" className="mt-3 text-white link-unstyled ml-3 rounded pl-5 border row">Possitions Of Responsibility</Link>
      <Link to="/admin/cv/internships" className="mt-3 text-white link-unstyled ml-3 rounded pl-5 border row">Internships</Link>
      <Link to="/admin/cv/hackathon" className="mt-3 text-white link-unstyled ml-3 rounded pl-5 border row">Hackathon</Link>
      <Link to="/admin/cv/ve" className="mt-3 text-white link-unstyled ml-3 rounded pl-5 border row">Volunteering Experience</Link>
      <Link to="/admin/cv/interest" className="mt-3 text-white link-unstyled ml-3 rounded pl-5 border row">Hobbies/Insterest</Link>
    </div>
  )
}

export default CVListView
