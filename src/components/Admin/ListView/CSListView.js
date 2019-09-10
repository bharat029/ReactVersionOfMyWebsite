import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addCS, updateCS, deleteCS } from '../../../store/actions/cvActions'
import CSForm from '../Forms/CSForm'

class CSListView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ListView: true,
       cskill: null
    }
  } 

  changeView = () => {
    this.setState({
      ListView: true
    })
  }

  add = e => {
    this.setState({
      ListView: false,
      cskill: null
    })
  }

  update = (e) => {
    this.setState({
      ListView: false,
      cskill: this.props.cskill[e.target.id]
    })
  }

  render() {
    const {cskill, addCS, updateCS, deleteCS} = this.props

    return (
      <>
      {
        this.state.ListView 
        ? <>
          <ul>
            {
              cskill 
              ? cskill.map((cs, idx) => <li key={cs.id} className="border rounded row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ cs.title }</span><button onClick={(e) => deleteCS(e.target.id)} id={cs.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={this.add} className="btn green">Add</button>
        </>
        : <CSForm cskill={this.state.cskill} changeView={this.changeView} add={addCS}  update={updateCS}  /> 
      }
      </>
    )
  }
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
  