import React, { useState } from 'react'

const AboutMeForm = ({ edu, changeView, add, update }) => {
  const [state, setState] = useState({})

  const changeHandler = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
      createdOn: new Date()
    })
  }

  const submitHnadler = e => {
    e.preventDefault()

    if(edu){
      update(state, edu.id)
    } else {
      add(state)
    }

    changeView(e)
  }

  return (
    <form method="post" onSubmit={submitHnadler} className="col m6 s12" action="">
      <div className="input-field">
        <label className={edu? 'active' : ''} htmlFor="edu">Education</label>
        <textarea className="materialize-textarea" onChange={changeHandler} defaultValue={edu && edu.edu} name="edu" id="edu" />
      </div>
      <div id='submit' className="input-field col s12 center">
          <button type="submit" className="btn green">{ edu ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default AboutMeForm
