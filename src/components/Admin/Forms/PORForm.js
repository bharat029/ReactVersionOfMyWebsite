import React, { useState } from 'react'

const PORForm = ({ por, changeView, add, update }) => {
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

    if(por){
      update(state, por.id)
    } else {
      add(state)
    }

    changeView(e)
  }

  return (
    <form method="post" onSubmit={submitHnadler} className="col m6 s12" action="">
      <div className="input-field">
        <label className={por? 'active' : ''} htmlFor="title">Title</label>
        <input type="text" onChange={changeHandler} defaultValue={por && por.title} name="title" id="title" />
      </div>
      <div className="input-field">
        <label className={por? 'active' : ''} htmlFor="desc">Description</label>
        <textarea className="materialize-textarea" onChange={changeHandler} defaultValue={por && por.desc} name="desc" id="desc" />
      </div>
      <div id='submit' className="input-field col s12 center">
          <button type="submit" className="btn green">{ por ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default PORForm
