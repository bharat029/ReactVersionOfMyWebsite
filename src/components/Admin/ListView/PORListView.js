import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addPOR, updatePOR, deletePOR } from '../../../store/actions/cvActions'
import PORForm from '../Forms/PORForm'

const PORListView = ({por, addPOR, updatePOR, deletePOR}) => {
  const [state, setState] = useState({ListView: true, por: null})

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
      por: null
    })
  }

  const update = (e) => {
    setState({
      ...state,
      ListView: false,
      por: por[e.target.id]
    })
  }

  return (
    <>
      {
        state.ListView 
        ? <>
          <ul>
            {
              por 
              ? por.map((p, idx) => <li key={p.id} className="border rounded row"><span onClick={update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ p.title }</span><button onClick={(e) => deletePOR(e.target.id)} id={p.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={add} className="btn green">Add</button>
        </>
        : <PORForm por={state.por} changeView={changeView} add={addPOR}  update={updatePOR}  /> 
      }
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    por: state.firestore.ordered.por
  }
}
  
const mapDispatchToProp = dispatch => {
  return {
    addPOR: (por) => dispatch(addPOR(por)),
    updatePOR: (por, id) => dispatch(updatePOR(por, id)),
    deletePOR: (id) => dispatch(deletePOR(id))
  }
}
  
export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'por', orderBy: ['createdOn', 'desc']}
  ])
)(PORListView)
  