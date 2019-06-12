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
          <ul className="list-unstyled">
            {
              internship 
              ? internship.map((cs, idx) => <li key={cs.id} className="mt-3 ml-3 border rounded row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col-11">{ cs.title }</span><button onClick={(e) => deleteInternship(e.target.id)} id={cs.id} className="btn btn-outline-primary col-1 text-white p-0 m-0 border-0" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={this.add} className="btn btn-success m-5 col-md-2 col-6" id="aboutmeform">Add</button>
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
  