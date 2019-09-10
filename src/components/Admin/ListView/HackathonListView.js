import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addHackathon, updateHackathon, deleteHackathon } from '../../../store/actions/cvActions'
import HackathonForm from '../Forms/HackathonForm'

class HackathonListView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ListView: true,
       hackathon: null
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
      hackathon: null
    })
  }

  update = (e) => {
    this.setState({
      ListView: false,
      hackathon: this.props.hackathon[e.target.id]
    })
  }

  render() {
    const {hackathon, addHackathon, updateHackathon, deleteHackathon} = this.props

    return (
      <>
      {
        this.state.ListView 
        ? <>
          <ul>
            {
              hackathon 
              ? hackathon.map((hk, idx) => <li key={hk.id} className="border rounded row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ hk.title }</span><button onClick={(e) => deleteHackathon(e.target.id)} id={hk.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={this.add} className="btn green">Add</button>
        </>
        : <HackathonForm hackathon={this.state.hackathon} changeView={this.changeView} add={addHackathon}  update={updateHackathon}  /> 
      }
      </>
    )
  }
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
  