import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addCS, updateCS, deleteCS } from '../../../store/actions/cvActions'
import CSForm from '../Forms/CSForm'

const CSListView = ({cskill, addCS, updateCS, deleteCS}) => {
  const [state, setState] = useState({ListView: true, cskill: null})

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
      cskill: null
    })
  }

  const update = (e) => {
    setState({
      ...state,
      ListView: false,
      cskill: cskill[e.target.id]
    })
  }

  return (
    <>
      {
        state.ListView 
        ? <>
          <ul>
            {
              cskill 
              ? cskill.map((cs, idx) => <li key={cs.id} className="border rounded row"><span onClick={update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ cs.title }</span><button onClick={(e) => deleteCS(e.target.id)} id={cs.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={add} className="btn green">Add</button>
        </>
        : <CSForm cskill={state.cskill} changeView={changeView} add={addCS}  update={updateCS}  /> 
      }
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    cskill: state.firestore.ordered.skills
  }
}
  
const mapDispatchToProp = dispatch => {
  return {
    addCS: (cskill) => dispatch(addCS(cskill)),
    updateCS: (cskill, id) => dispatch(updateCS(cskill, id)),
    deleteCS: (id) => dispatch(deleteCS(id))
  }
}
  
export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'skills', orderBy: ['createdOn', 'desc'] }
  ])
)(CSListView)
  