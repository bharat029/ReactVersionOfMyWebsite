import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addInternship, updateInternship, deleteInternship } from '../../../store/actions/cvActions'
import InternshipForm from '../Forms/InternshipForm'

const CSListView = ({internship, addInternship, updateInternship, deleteInternship}) => {
  const [state, setState] = useState({ListView: true, internship: null})

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
      internship: null
    })
  }

  const update = (e) => {
    setState({
      ...state,
      ListView: false,
      internship: internship[e.target.id]
    })
  }

  return (
    <>
      {
        state.ListView 
        ? <>
          <ul>
            {
              internship 
              ? internship.map((cs, idx) => <li key={cs.id} className="border rounded row"><span onClick={update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ cs.title }</span><button onClick={(e) => deleteInternship(e.target.id)} id={cs.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={add} className="btn green">Add</button>
        </>
        : <InternshipForm internship={state.internship} changeView={changeView} add={addInternship}  update={updateInternship}  /> 
      }
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    internship: state.firestore.ordered.internships
  }
}
  
const mapDispatchToProp = dispatch => {
  return {
    addInternship: (internship) => dispatch(addInternship(internship)),
    updateInternship: (internship, id) => dispatch(updateInternship(internship, id)),
    deleteInternship: (id) => dispatch(deleteInternship(id))
  }
}
  
export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'internships', orderBy: ['createdOn', 'desc'] }
  ])
)(CSListView)
  