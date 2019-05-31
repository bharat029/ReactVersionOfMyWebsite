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
            <title>Sign In - Kunjal Panchal</title>
          </Helmet>
          <div className="page">
            <h2 id="page-title">Sign In Admin</h2>
            <form method="post" onSubmit={this.submited} className="col-md-5 offset-md-1 mt-5" action="">
              { authError && <div id="alert" className="alert alert-danger" role="alert">{ authError }</div> }
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" onChange={this.changeHandler} className="form-control" placeholder="Email" name="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" onChange={this.changeHandler} className="form-control" placeholder="Password"  name="password" id="password" />
              </div>
              <div id='submit' className="form-group col-12 text-center">
                <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-md-4 col-6">Sign In</button>
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
