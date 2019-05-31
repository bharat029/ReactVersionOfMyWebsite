import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const VE = ({ ves }) => {
  return (
    <dl>
      {
        ves 
        ? ves.map(ve => <div key={ve.id}><dt>{ve.title}:</dt><dd className="pl-5">{ve.desc}<ul>{ve['high-1'] && <li>{ve['high-1']}</li>}{ve['high-2'] && <li>{ve['high-2']}</li>}{ve['high-3'] && <li>{ve['high-3']}</li>}</ul></dd></div>)
        : <p>Loading Datat... Please wait!!</p>
      }
    </dl>
  )
}

const mapStateToProp = (state) => {
  return {
    ves: state.firestore.ordered.ve
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 've', orderBy: ['createdOn', 'desc'] }
  ])
)(VE)
