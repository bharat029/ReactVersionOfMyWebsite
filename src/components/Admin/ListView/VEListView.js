import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addVE, updateVE, deleteVE } from '../../../store/actions/cvActions'
import VEForm from '../Forms/VEForm'

class VEListView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ListView: true,
       ve: null
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
      ve: null
    })
  }

  update = (e) => {
    this.setState({
      ListView: false,
      ve: this.props.ve[e.target.id]
    })
  }

  render() {
    const {ve, addVE, updateVE, deleteVE} = this.props

    return (
      <>
      {
        this.state.ListView 
        ? <>
          <ul>
            {
              ve 
              ? ve.map((ve, idx) => <li key={ve.id} className="border rounded row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ ve.title }</span><button onClick={(e) => deleteVE(e.target.id)} id={ve.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={this.add} className="btn green">Add</button>
        </>
        : <VEForm ve={this.state.ve} changeView={this.changeView} add={addVE}  update={updateVE}  /> 
      }
      </>
    )
  }
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
  