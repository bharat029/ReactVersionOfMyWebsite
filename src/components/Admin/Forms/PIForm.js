import React, { useState } from 'react'

const AboutMeForm = ({ pint, changeView, add, update }) => {
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

    if(pint){
      update(state, pint.id)
    } else {
      add(state)
    }

    changeView(e)
  }

  return (
    <form method="post" onSubmit={submitHnadler} className="col m6 s12" action="">
      <div className="input-field">
        <label className={pint? 'active' : ''} htmlFor="pint">Professional Interest</label>
        <input type="text" onChange={changeHandler} defaultValue={pint && pint.pint} name="pint" id="pint" />
      </div>
      <div id='submit' className="input-field col s12 center">
          <button type="submit" className="btn green">{ pint ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default AboutMeForm
