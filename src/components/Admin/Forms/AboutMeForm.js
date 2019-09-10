import React, { useState } from 'react'

const AboutMeForm = ({ abtme, changeView, add, update }) => {
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

    if(abtme){
      update(state, abtme.id)
    } else {
      add(state)
    }
    changeView(e)
  }

  return (
    <form method="post" onSubmit={submitHnadler} className="col m6 s12" action="">
      <div className="input-field">
        <label className={abtme ? 'active' : ''} htmlFor="abtme">About Me</label>
        <textarea onChange={changeHandler} defaultValue={abtme && abtme.abtme} className="materialize-textarea" name="abtme" id="abtme" />
      </div>
      <div id='submit' className="input-field col s12 center">
          <button type="submit" className="btn green">{ abtme ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default AboutMeForm
