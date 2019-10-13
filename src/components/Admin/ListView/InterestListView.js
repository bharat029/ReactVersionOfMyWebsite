import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addInterest, updateInterest, deleteInterest } from '../../../store/actions/cvActions'
import InterestForm from '../Forms/InterestForm'

const InterestsListView = ({hobby, addInterest, updateInterest, deleteInterest}) => {
  const [state, setState] = useState({ListView: true, hobby: null})

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
      hobby: null
    })
  }

  const update = (e) => {
    setState({
      ...state,
      ListView: false,
      hobby: hobby[e.target.id]
    })
  }

  return (
    <>
      {
        state.ListView 
        ? <>
          <ul>
            {
              hobby 
              ? hobby.map((hinterest, idx) => <li key={hinterest.id} className="border rounded row"><span onClick={update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ hinterest.hobby }</span><button onClick={(e) => deleteInterest(e.target.id)} id={hinterest.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={add} className="btn green">Add</button>
        </>
        : <InterestForm hobby={state.hobby} changeView={changeView} add={addInterest}  update={updateInterest}  /> 
      }
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    hobby: state.firestore.ordered.hobbies
  }
}
  
const mapDispatchToProp = dispatch => {
  return {
    addInterest: (hobby) => dispatch(addInterest(hobby)),
    updateInterest: (hobby, id) => dispatch(updateInterest(hobby, id)),
    deleteInterest: (id) => dispatch(deleteInterest(id))
  }
}
  
export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'hobbies', orderBy: ['createdOn', 'desc'] }
  ])
)(InterestsListView)
  