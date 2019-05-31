import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const ProfessionalInterests = ({ pinterest }) => {
  return (
    <ul>
      {
        pinterest 
        ? pinterest.map(pint => <li key={pint.id}>{pint.pint}</li>)
        : <p>Loading Datat... Please wait!!</p>
      }
    </ul>
  )
}

const mapStateToProp = (state) => {
  return {
    pinterest: state.firestore.ordered.pinterest
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'pinterest', orderBy: ['createdOn', 'desc'] }
  ])
)(ProfessionalInterests)
