import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const AboutMe = ({ aboutme }) => {
  return (
    <>
      <Helmet>
        <title>About Me - Bharathan Mudaliar</title>
      </Helmet>
      <div id="page-title" className="row">
        <h3>About Me</h3>
      </div>
      <div id="page-content">
      {
        aboutme 
        ? aboutme.map(abtme => <p key={abtme.id}>{abtme.abtme}</p>) 
        : <p>Loading Data... Please wait!!</p>
      }
      </div>
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    aboutme: state.firestore.ordered.aboutme
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'aboutme' }
  ])
)(AboutMe)
