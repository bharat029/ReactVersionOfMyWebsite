import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const Education = ({ education }) => {
  return (
    <ul>
      {
        education 
        ? education.map(edu => <li key={edu.id}>{edu.edu}</li>)
        : <p>Loading Datat... Please wait!!</p>
      }
    </ul>
  )
}

const mapStateToProp = (state) => {
  return {
    education: state.firestore.ordered.education
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'education', orderBy: ['createdOn', 'desc'] }
  ])
)(Education)
