import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addVE, updateVE, deleteVE } from '../../../store/actions/cvActions'
import VEForm from '../Forms/VEForm'

const VEListView = ({ve, addVE, updateVE, deleteVE}) => {
  const [state, setState] = useState({ListView: true, ve: null})

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
      ve: null
    })
  }

  const update = (e) => {
    setState({
      ...state,
      ListView: false,
      ve: ve[e.target.id]
    })
  }

  return (
    <>
      {
        state.ListView 
        ? <>
          <ul>
            {
              ve 
              ? ve.map((ve, idx) => <li key={ve.id} className="border rounded row"><span onClick={update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ ve.title }</span><button onClick={(e) => deleteVE(e.target.id)} id={ve.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={add} className="btn green">Add</button>
        </>
        : <VEForm ve={state.ve} changeView={changeView} add={addVE}  update={updateVE}  /> 
      }
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    ve: state.firestore.ordered.ve
  }
}
  
const mapDispatchToProp = dispatch => {
  return {
    addVE: (ve) => dispatch(addVE(ve)),
    updateVE: (ve, id) => dispatch(updateVE(ve, id)),
    deleteVE: (id) => dispatch(deleteVE(id))
  }
}
  
export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 've' }
  ])
)(VEListView)
  