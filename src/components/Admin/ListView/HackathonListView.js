import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addHackathon, updateHackathon, deleteHackathon } from '../../../store/actions/cvActions'
import HackathonForm from '../Forms/HackathonForm'

const HackathonListView = ({hackathon, addHackathon, updateHackathon, deleteHackathon}) => {
  const [state, setState] = useState({ListView: true, hackathon: null})

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
      hackathon: null
    })
  }

  const update = (e) => {
    setState({
      ...state,
      ListView: false,
      hackathon: hackathon[e.target.id]
    })
  }

  return (
    <>
      {
        state.ListView 
        ? <>
          <ul>
            {
              hackathon 
              ? hackathon.map((hk, idx) => <li key={hk.id} className="border rounded row"><span onClick={update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ hk.title }</span><button onClick={(e) => deleteHackathon(e.target.id)} id={hk.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={add} className="btn green">Add</button>
        </>
        : <HackathonForm hackathon={state.hackathon} changeView={changeView} add={addHackathon}  update={updateHackathon}  /> 
      }
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    hackathon: state.firestore.ordered.hackathon
  }
}
  
const mapDispatchToProp = dispatch => {
  return {
    addHackathon: (hackathon) => dispatch(addHackathon(hackathon)),
    updateHackathon: (hackathon, id) => dispatch(updateHackathon(hackathon, id)),
    deleteHackathon: (id) => dispatch(deleteHackathon(id))
  }
}
  
export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'hackathon', orderBy: ['createdOn', 'desc'] }
  ])
)(HackathonListView)
  