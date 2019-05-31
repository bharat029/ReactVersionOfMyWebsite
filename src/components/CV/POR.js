import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const POR = ({ por }) => {
  return (
    <dl>
      {
        por 
        ? por.map(p => <div key={p.id}><dt>{p.title}:</dt><dd className="pl-5">{p.desc}</dd></div>)
        : <p>Loading Datat... Please wait!!</p>
      }
    </dl>
  )
}

const mapStateToProp = (state) => {
  return {
    por: state.firestore.ordered.por
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'por', orderBy: ['createdOn', 'desc'] }
  ])
)(POR)
