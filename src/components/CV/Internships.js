import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const Internships = ({ internships }) => {
  return (
    <dl>
      {
        internships 
        ? internships.map(internship => <div key={internship.id}><dt>{internship.title}:</dt><small className="pl-3">Duration: {internship.dur}</small><dd className="pl-5 mt-2">{internship.desc}<p><a href={internship.certi}  rel="noopener noreferrer" className='text-white d-block mt-3' target='_blank'>Certificate Link</a></p></dd></div>)
        : <p>Loading Datat... Please wait!!</p>
      }
    </dl>
  )
}

const mapStateToProp = (state) => {
  return {
    internships: state.firestore.ordered.internships
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'internships', orderBy: ['createdOn', 'desc'] }
  ])
)(Internships)
