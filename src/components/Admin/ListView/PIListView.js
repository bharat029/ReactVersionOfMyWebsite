import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addPI, updatePI, deletePI } from '../../../store/actions/cvActions'
import PIForm from '../Forms/PIForm'

class PIListView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ListView: true,
       pinterest: null
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
      pinterest: null
    })
  }

  update = (e) => {
    this.setState({
      ListView: false,
      pinterest: this.props.pinterest[e.target.id]
    })
  }

  render() {
    const {pinterest, addPI, updatePI, deletePI} = this.props

    return (
      <>
      {
        this.state.ListView 
        ? <>
          <ul>
            {
              pinterest 
              ? pinterest.map((pint, idx) => <li key={pint.id} className="border rounded row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ pint.pint }</span><button onClick={(e) => deletePI(e.target.id)} id={pint.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={this.add} className="btn green">Add</button>
        </>
        : <PIForm pint={this.state.pinterest} changeView={this.changeView} add={addPI}  update={updatePI}  /> 
      }
      </>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    pinterest: state.firestore.ordered.pinterest
  }
}
  
const mapDispatchToProp = dispatch => {
  return {
    addPI: (pinterest) => dispatch(addPI(pinterest)),
    updatePI: (pinterest, id) => dispatch(updatePI(pinterest, id)),
    deletePI: (id) => dispatch(deletePI(id))
  }
}
  
export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'pinterest', orderBy: ['createdOn', 'desc'] }
  ])
)(PIListView)
  