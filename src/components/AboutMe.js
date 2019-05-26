import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const AboutMe = () => {
  return (
    <>
      <Helmet>
        <title>About Me - Bharathan Mudaliar</title>
      </Helmet>
      <div id="page-title" className="row">
        <h3>About Me</h3>
      </div>
      <div id="page-content">
        <p>I am a third year BE (CSE) student at Maharaja Sayajirao University, Baroda. I’d like to welcome you all to my website.</p>
        <p>I am an enthusiastic learner on MOOC platforms like Coursera and Edx and enjoy spending my time in honing my skillset. My primary fields of interests include Deep Learning, Computer Vision and Web Development. As for languages I primarily use python and have come to enjoy working with it.</p>
        <p>I aspire to be a researcher in the field of Artificial Intelligence. The whole idea of teaching a machine to do things like us (humans) and the possibility of them being able to do them better than their own creators fascinates me. Moreover, this is one of the fields which still has a lot of uncharted territories, or so I feel at least. This is the reason I want to become a researcher and do my bit in exploring the possibilities with AI.</p>
      </div>
    </>
  )
}

export default AboutMe
