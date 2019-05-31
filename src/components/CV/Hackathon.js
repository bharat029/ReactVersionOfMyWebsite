import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const Hackathon = ({ hackathons }) => {
  return (
    <dl>
      {
        hackathons 
        ? hackathons.map(hackathon => <div key={hackathon.id}><dt>{hackathon.title}:</dt><dd className="pl-5">{hackathon.desc}<ul>{hackathon['high-1'] && <li>{hackathon['high-1']}</li>}{hackathon['high-2'] && <li>{hackathon['high-2']}</li>}{hackathon['high-3'] && <li>{hackathon['high-3']}</li>}</ul></dd></div>)
        : <p>Loading Datat... Please wait!!</p>
      }
    </dl>
  )
}

const mapStateToProp = (state) => {
  return {
    hackathons: state.firestore.ordered.hackathon
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'hackathon', orderBy: ['createdOn', 'desc'] }
  ])
)(Hackathon)
