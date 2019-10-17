import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Education from './CV/Education'
import ProfessionalInterests from './CV/ProfessionalInterests'
import Hobbies from './CV/Hobbies'
import POR from './CV/POR'
import Internships from './CV/Internships'
import ComputerSkills from './CV/ComputerSkills'
import Hackathon from './CV/Hackathon'
import VE from './CV/VE'

const CV = () => {
  useEffect(() => {
    document.getElementById('main-content').scrollTop = 0
    document.querySelector('#mobile-nav').classList.remove('open');
  }, [])

  return (
    <>
      <Helmet>
        <title>CV - Bharathan Mudaliar</title>
      </Helmet>
      <div className="row page-title">
        <h3><i className="fa fa-graduation-cap cv-icon" />Education</h3>
      </div>
      <div className="page-content">
        <Education />
      </div>
      <div className="row page-title">
        <h3><i className="fa fa-laptop cv-icon" />Professional Interest</h3>
      </div>
      <div className="page-content">
        <ProfessionalInterests />
      </div>
      <div className="row page-title">
        <h3><i className="fa fa-terminal cv-icon" />Computer Skills</h3>
      </div>
      <div className="page-content">
        <ComputerSkills />
      </div>
      <div className="row page-title">
        <h3><i className="fa fa-user cv-icon" />Positions Of Responsibility</h3>
      </div>
      <div className="page-content">
        <POR />
      </div>
      <div className="row page-title">
        <h3><i className="fa fa-briefcase cv-icon" />Internship Experience</h3>
      </div>
      <div className="page-content">
        <Internships />
      </div>
      <div className="row page-title">
        <h3><i className="fa fa-cogs cv-icon" />Hackathon</h3>
      </div>
      <div className="page-content">
        <Hackathon />
      </div>
      <div className="row page-title">
        <h3><i className="fa fa-bookmark cv-icon" />Volunteer Experience</h3>
      </div>
      <div className="page-content">
        <VE />
      </div>
      <div className="row page-title">
        <h3><i className="fa fa-cubes cv-icon" />Hobbies/Interests</h3>
      </div>
      <div className="page-content">
        <Hobbies />
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <div className='page-content'>
        <a href="https://firebasestorage.googleapis.com/v0/b/bharathanmudaliar.appspot.com/o/files%2FBharathan-Resume.pdf?alt=media&token=065531a7-ac68-45c6-8804-6e9abb69bcc0" rel="noopener noreferrer" className='btn blue' target='_blank'>
          <i className='fa fa-download'></i> Download CV
        </a>
      </div>
    </>
  )
}

export default CV
