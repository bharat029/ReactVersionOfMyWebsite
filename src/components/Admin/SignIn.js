import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class SignIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: null,
       password: null
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submited = (e) => {
    e.preventDefault()
    this.props.signIn(this.state)
  }

  render() {
    const { auth, authError} = this.props 

    if(!auth.uid){
      return (
        <>
          <Helmet>
            <title>Sign In - Bharathan Mudaliar</title>
          </Helmet>
          <div>
            <div className="row page-title">
              <h3 className="col s12">Sign In Admin</h3>
            </div>
            <form method="post" onSubmit={this.submited} className="col m6 s12 offset-m3 " action="">
              { authError && <div id="alert" className="red lighten-3 red-text" role="alert">{ authError }</div> }
              <div className="input-field">
                <label className="white-text" htmlFor="email">Email</label>
                <input type="text" onChange={this.changeHandler} name="email" id="email" />
              </div>
              <div className="input-field">
                <label className="white-text" htmlFor="password">Password</label>
                <input type="password" onChange={this.changeHandler} name="password" id="password" />
              </div>
              <div id='submit' className="input-field col s12 center-align">
                <button type="submit" className="btn green center-align">Sign In</button>
              </div>
            </form>
          </div>
        </>
      )
    } else {
      return <Redirect to="/admin" />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
