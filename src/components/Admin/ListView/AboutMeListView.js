import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addAboutMe, updateAboutMe, deleteAboutMe } from '../../../store/actions/aboutmeActions'
import AboutMeForm from '../Forms/AboutMeForm'

const AboutMeListView = ({aboutme, addAboutMe, updateAboutMe, deleteAboutMe}) => {
  const [state, setState] = useState({ListView: true, abtme: null})

  const changeView = () => {
    setState({
      ...state, 
      ListView: true
    })
  }

  const add = (e) => {
    setState({
      ...state,
      ListView: false,
      abtme: null
    })
  }

  const update = (e) => {
    setState({
      ...state,
      ListView: false,
      abtme: aboutme[e.target.id]
    })
  }

  return (
    <>
      {
        state.ListView 
        ? <>
          <ul>
            {
              aboutme 
              ? aboutme.map((abtme, idx) => <li key={abtme.id} className="border rounded row"><span onClick={update} id={idx} style={{ cursor: "pointer" }} className="col s11 truncate">{ abtme.abtme }</span><button onClick={(e) => deleteAboutMe(e.target.id)} id={abtme.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75rem' }}>&times;</button></li>)
              : <p>Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={add} className="btn green">Add</button>
        </>
        : <AboutMeForm abtme={state.abtme} changeView={changeView} add={addAboutMe}  update={updateAboutMe}  /> 
      }
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    aboutme: state.firestore.ordered.aboutme
  }
}
  
const mapDispatchToProp = dispatch => {
  return {
    addAboutMe: (abtme) => dispatch(addAboutMe(abtme)),
    updateAboutMe: (abtme, idx) => dispatch(updateAboutMe(abtme, idx)),
    deleteAboutMe: (idx) => dispatch(deleteAboutMe(idx))
  }
}
  
export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'aboutme', orderBy: ['createdOn']}
  ])
)(AboutMeListView)
  