import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const SignIn = ({auth, authError, signIn}) => {
  const [state, setState] = useState({email: null, password: null})

  const changeHandler = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    })
  }

  const submited = (e) => {
    e.preventDefault()
    signIn(state)
  }

  if(!auth.uid){
    return (
      <>
        <Helmet>
          <title>Sign In - Bharathan Mudaliar</title>
        </Helmet>
        <div>
          <div style={{ width: '100%' }} className="row page-title">
            <h3 style={{ fontSize: '1.5rem' }}>Sign In Admin</h3>
          </div>
          <div className="page-content">
            <form method="post" onSubmit={submited} className="col m6 s12 offset-m3 " action="">
              { authError && <div id="alert" className="red lighten-3 red-text text-darken-4" role="alert">{ authError }</div> }
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="text" onChange={changeHandler} name="email" id="email" />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={changeHandler} name="password" id="password" />
              </div>
              <div id='submit' className="input-field col s12 center-align">
                <button type="submit" className="btn green center-align">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  } else {
    return <Redirect to="/admin" />
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
