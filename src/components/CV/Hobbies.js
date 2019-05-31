import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const Hobbies = ({ hobbies }) => {
  return (
    <div>
      {
        hobbies 
        ? hobbies.map(hobby => <p key={hobby.id}>{hobby.hobby}</p>)
        : <p>Loading Datat... Please wait!!</p>
      }
    </div>
  )
}

const mapStateToProp = (state) => {
  return {
    hobbies: state.firestore.ordered.hobbies
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'hobbies', orderBy: ['createdOn', 'desc'] }
  ])
)(Hobbies)
