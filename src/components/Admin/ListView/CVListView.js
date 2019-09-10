import React from 'react'
import {Link} from 'react-router-dom';

const CVListView = () => {
  return (
    <div id="cv-link">
      <Link to="/admin/cv/education" style={{ display: 'block', padding: '5px 5px 5px 15px' }} className="white-text link-unstyled border rounded row">Education</Link>
      <Link to="/admin/cv/professionalInterest" style={{ display: 'block', padding: '5px 5px 5px 15px' }} className="white-text link-unstyled border rounded row">Professional Interests</Link>
      <Link to="/admin/cv/skills" style={{ display: 'block', padding: '5px 5px 5px 15px' }} className="white-text link-unstyled border rounded row">Computer Skills</Link>
      <Link to="/admin/cv/por" style={{ display: 'block', padding: '5px 5px 5px 15px' }} className="white-text link-unstyled border rounded row">Possitions Of Responsibility</Link>
      <Link to="/admin/cv/internships" style={{ display: 'block', padding: '5px 5px 5px 15px' }} className="white-text link-unstyled border rounded row">Internships</Link>
      <Link to="/admin/cv/hackathon" style={{ display: 'block', padding: '5px 5px 5px 15px' }} className="white-text link-unstyled border rounded row">Hackathon</Link>
      <Link to="/admin/cv/ve" style={{ display: 'block', padding: '5px 5px 5px 15px' }} className="white-text link-unstyled border rounded row">Volunteering Experience</Link>
      <Link to="/admin/cv/interest" style={{ display: 'block', padding: '5px 5px 5px 15px' }} className="white-text link-unstyled border rounded row">Hobbies/Interest</Link>
    </div>
  )
}

export default CVListView
