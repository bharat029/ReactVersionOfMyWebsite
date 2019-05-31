import React from 'react'
import { Helmet } from 'react-helmet'
import Education from './CV/Education'
import ProfessionalInterests from './CV/ProfessionalInterests'
import Hobbies from './CV/Hobbies'
import POR from './CV/POR'
import ComputerSkills from './CV/ComputerSkills'
import Hackathon from './CV/Hackathon'
import VE from './CV/VE'

const CV = () => {
  return (
    <>
      <Helmet>
        <title>CV - Bharathan Mudaliar</title>
      </Helmet>
      <div className="row page-title">
        <h4>Education</h4>
      </div>
      <div className="page-content">
        <Education />
      </div>
      <div className="row page-title">
        <h4>Professional Interest</h4>
      </div>
      <div className="page-content">
        <ProfessionalInterests />
      </div>
      <div className="row page-title">
        <h4>Computer Skills</h4>
      </div>
      <div className="page-content">
        <ComputerSkills />
      </div>
      <div className="row page-title">
        <h4>Possitions Of Responsibility</h4>
      </div>
      <div className="page-content">
        <POR />
      </div>
      <div className="row page-title">
        <h4>Hackathon</h4>
      </div>
      <div className="page-content">
        <Hackathon />
      </div>
      <div className="row page-title">
        <h4>Volunteer Experience</h4>
      </div>
      <div className="page-content">
        <VE />
      </div>
      <div className="row page-title">
        <h4>Hobbies/Interests</h4>
      </div>
      <div className="page-content">
        <Hobbies />
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <div id='download-btn-container'>
        <a href="https://firebasestorage.googleapis.com/v0/b/bharathanmudaliar.appspot.com/o/files%2FResume.pdf?alt=media&token=08edaf92-52f0-4017-8939-0302b6b582f4" rel="noopener noreferrer" className='btn btn-primary' target='_blank'>
          <i className='fa fa-download'></i> Download CV
        </a>
      </div>
    </>
  )
}

export default CV
