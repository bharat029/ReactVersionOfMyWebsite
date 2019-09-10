import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { addAboutMe, updateAboutMe, deleteAboutMe } from '../../../store/actions/aboutmeActions'
import AboutMeForm from '../Forms/AboutMeForm'

class AboutMeListView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ListView: true,
       abtme: null
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
      abtme: null
    })
  }

  update = (e) => {
    this.setState({
      ListView: false,
      abtme: this.props.aboutme[e.target.id]
    })
  }

  render() {
    const {aboutme, addAboutMe, updateAboutMe, deleteAboutMe} = this.props

    return (
      <>
      {
        this.state.ListView 
        ? <>
          <ul>
            {
              aboutme 
              ? aboutme.map((abtme, idx) => <li key={abtme.id} className="border rounded row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col s11 truncate">{ abtme.abtme }</span><button onClick={(e) => deleteAboutMe(e.target.id)} id={abtme.id} className="btn close col s1 white-text transparent" style={{ fontSize: '1.75rem' }}>&times;</button></li>)
              : <p>Loading Data... Please wait!!</p>
            }
          </ul>
          <button onClick={this.add} className="btn green">Add</button>
        </>
        : <AboutMeForm abtme={this.state.abtme} changeView={this.changeView} add={addAboutMe}  update={updateAboutMe}  /> 
      }
      </>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    aboutme: state.firestore.ordered.aboutme
  }
}
  
const mapDispatchToProp = dispatch => {
  return {
    addAboutMe: (abtme) => dispatch(addAboutMe(abtme)),
    updateAboutMe: (abtme, idx) => dispatch(updateAboutMe(abtme, idx)),
    deleteAboutMe: (idx) => dispatch(deleteAboutMe(idx))
  }
}
  
export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'aboutme', orderBy: ['createdOn']}
  ])
)(AboutMeListView)
  