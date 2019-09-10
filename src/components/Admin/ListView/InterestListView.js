import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addInterest, updateInterest, deleteInterest } from '../../../store/actions/cvActions'
import InterestForm from '../Forms/InterestForm'

class InterestsListView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ListView: true,
       hobby: null
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
      hobby: null
    })
  }

  update = (e) => {
    this.setState({
      ListView: false,
      hobby: this.props.hobby[e.target.id]
    })
  }

  render() {
    const {hobby, addInterest, updateInterest, deleteInterest} = this.props

    return (
      <>
      {
        this.state.ListView 
        ? <>
          <ul>
            {
              hobby 
              ? hobby.map((hinterest, idx) => <li key={hinterest.id} className="border rounded row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ hinterest.hobby }</span><button onClick={(e) => deleteInterest(e.target.id)} id={hinterest.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={this.add} className="btn green">Add</button>
        </>
        : <InterestForm hobby={this.state.hobby} changeView={this.changeView} add={addInterest}  update={updateInterest}  /> 
      }
      </>
    )
  }
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
  