import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addInternship, updateInternship, deleteInternship } from '../../../store/actions/cvActions'
import InternshipForm from '../Forms/InternshipForm'

class CSListView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ListView: true,
       internship: null
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
      internship: null
    })
  }

  update = (e) => {
    this.setState({
      ListView: false,
      internship: this.props.internship[e.target.id]
    })
  }

  render() {
    const {internship, addInternship, updateInternship, deleteInternship} = this.props

    return (
      <>
      {
        this.state.ListView 
        ? <>
          <ul>
            {
              internship 
              ? internship.map((cs, idx) => <li key={cs.id} className="border rounded row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col s11">{ cs.title }</span><button onClick={(e) => deleteInternship(e.target.id)} id={cs.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={this.add} className="btn green">Add</button>
        </>
        : <InternshipForm internship={this.state.internship} changeView={this.changeView} add={addInternship}  update={updateInternship}  /> 
      }
      </>
    )
  }
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
  