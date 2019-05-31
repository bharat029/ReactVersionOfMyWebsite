import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const ComputerSkills = ({ skills }) => {
  return (
    <dl>
      {
        skills 
        ? skills.map(skill => <div key={skill.id}><dt>{skill.title}:</dt><dd className="pl-5">{skill.desc}</dd></div>)
        : <p>Loading Datat... Please wait!!</p>
      }
    </dl>
  )
}

const mapStateToProp = (state) => {
  return {
    skills: state.firestore.ordered.skills
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'skills', orderBy: ['createdOn', 'desc'] }
  ])
)(ComputerSkills)
