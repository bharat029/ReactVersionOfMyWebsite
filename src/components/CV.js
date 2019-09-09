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
  }, [])

  return (
    <>
      <Helmet>
        <title>CV - Bharathan Mudaliar</title>
      </Helmet>
      <div className="row page-title">
        <h4><i className="fa fa-graduation-cap pr-3" />Education</h4>
      </div>
      <div className="page-content">
        <Education />
      </div>
      <div className="row page-title">
        <h4><i className="fa fa-laptop pr-3" />Professional Interest</h4>
      </div>
      <div className="page-content">
        <ProfessionalInterests />
      </div>
      <div className="row page-title">
        <h4><i className="fa fa-terminal pr-3" />Computer Skills</h4>
      </div>
      <div className="page-content">
        <ComputerSkills />
      </div>
      <div className="row page-title">
        <h4><i className="fa fa-user pr-3" />Positions Of Responsibility</h4>
      </div>
      <div className="page-content">
        <POR />
      </div>
      <div className="row page-title">
        <h4><i className="fa fa-briefcase pr-3" />Internship Experience</h4>
      </div>
      <div className="page-content">
        <Internships />
      </div>
      <div className="row page-title">
        <h4><i className="fa fa-cogs pr-3" />Hackathon</h4>
      </div>
      <div className="page-content">
        <Hackathon />
      </div>
      <div className="row page-title">
        <h4><i className="fa fa-bookmark pr-3" />Volunteer Experience</h4>
      </div>
      <div className="page-content">
        <VE />
      </div>
      <div className="row page-title">
        <h4><i className="fa fa-cubes pr-3" />Hobbies/Interests</h4>
      </div>
      <div className="page-content">
        <Hobbies />
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <div id='download-btn-page-content'>
        <a href="https://firebasestorage.googleapis.com/v0/b/bharathanmudaliar.appspot.com/o/files%2FResume.pdf?alt=media&token=08edaf92-52f0-4017-8939-0302b6b582f4" rel="noopener noreferrer" className='btn blue' target='_blank'>
          <i className='fa fa-download'></i> Download CV
        </a>
      </div>
    </>
  )
}

export default CV
