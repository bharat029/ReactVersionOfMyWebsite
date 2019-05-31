import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addEducation, updateEducation, deleteEducation } from '../../../store/actions/cvActions'
import EducationForm from '../Forms/EducationForm'

class EducationListView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ListView: true,
       edu: null
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
      edu: null
    })
  }

  update = (e) => {
    this.setState({
      ListView: false,
      edu: this.props.education[e.target.id]
    })
  }

  render() {
    const {education, addEducation, updateEducation, deleteEducation} = this.props

    return (
      <>
      {
        this.state.ListView 
        ? <>
          <ul className="list-unstyled">
            {
              education 
              ? education.map((edu, idx) => <li key={edu.id} className="mt-3 ml-3 border rounded row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col-11">{ edu.edu }</span><button onClick={(e) => deleteEducation(e.target.id)} id={edu.id} className="btn btn-outline-primary col-1 text-white p-0 m-0 border-0" style={{ fontSize: '1.75em' }}>&times;</button></li>)
              : <p key="loadingedu">Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={this.add} className="btn btn-success m-5 col-md-2 col-6" id="aboutmeform">Add</button>
        </>
        : <EducationForm edu={this.state.edu} changeView={this.changeView} add={addEducation}  update={updateEducation}  /> 
      }
      </>
    )
  }
}

const mapStateToProp = (state) => {
    return {
        education: state.firestore.ordered.education
    }
  }
  
const mapDispatchToProp = dispatch => {
  return {
      addEducation: (edu) => dispatch(addEducation(edu)),
      updateEducation: (edu, id) => dispatch(updateEducation(edu, id)),
      deleteEducation: (id) => dispatch(deleteEducation(id))
  }
}
  
export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'education', orderBy: ['createdOn', 'desc'] }
  ])
)(EducationListView)
  