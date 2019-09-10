import React, { useState } from 'react'

const CSForm = ({ cskill, changeView, add, update }) => {
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

    if(cskill){
      update(state, cskill.id)
    } else {
      add(state)
    }

    changeView(e)
  }

  return (
    <form method="post" onSubmit={submitHnadler} className="col m6 s12" action="">
      <div className="input-field">
        <label className={cskill? 'active' : ''} htmlFor="title">Title</label>
        <input type="text" onChange={changeHandler} defaultValue={cskill && cskill.title} name="title" id="title" />
      </div>
      <div className="input-field">
        <label className={cskill? 'active' : ''} htmlFor="desc">Description</label>
        <input type="text" onChange={changeHandler} defaultValue={cskill && cskill.desc} name="desc" id="desc" />
      </div>
      <div id='submit' className="input-field col s12 center">
          <button type="submit" className="btn green">{ cskill ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default CSForm
