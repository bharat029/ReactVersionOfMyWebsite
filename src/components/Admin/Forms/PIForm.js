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
    <form method="post" onSubmit={submitHnadler} className="col-md-6 m-5" action="">
      <div className="form-group">
        <label htmlFor="pint">Professional Interest:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="One Point in Professional Interest" defaultValue={pint && pint.pint} name="pint" id="pint" />
      </div>
      <div id='submit' className="form-group col-12 text-center">
          <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-md-4 col-6">{ pint ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default AboutMeForm
