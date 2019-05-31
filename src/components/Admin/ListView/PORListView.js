import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addPOR, updatePOR, deletePOR } from '../../../store/actions/cvActions'
import PORForm from '../Forms/PORForm'

class PORListView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ListView: true,
       por: null
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
      por: null
    })
  }

  update = (e) => {
    this.setState({
      ListView: false,
      por: this.props.por[e.target.id]
    })
  }

  render() {
    const {por, addPOR, updatePOR, deletePOR} = this.props

    return (
      <>
      {
        this.state.ListView 
        ? <>
          <ul className="list-unstyled">
            {
              por 
              ? por.map((p, idx) => <li key={p.id} className="mt-3 ml-3 border rounded row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col-11">{ p.title }</span><button onClick={(e) => deletePOR(e.target.id)} id={p.id} className="btn btn-outline-primary col-1 text-white p-0 m-0 border-0" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={this.add} className="btn btn-success m-5 col-md-2 col-6" id="aboutmeform">Add</button>
        </>
        : <PORForm por={this.state.por} changeView={this.changeView} add={addPOR}  update={updatePOR}  /> 
      }
      </>
    )
  }
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
  