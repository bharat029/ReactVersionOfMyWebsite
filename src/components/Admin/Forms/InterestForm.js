import React, { useState } from 'react'

const InterestForm = ({ hobby, changeView, add, update }) => {
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

    if(hobby){
      update(state, hobby.id)
    } else {
      add(state)
    }
    changeView(e)
  }

  return (
    <form method="post" onSubmit={submitHnadler} className="col m6 s12" action="">
      <div className="input-field">
        <label className={hobby? 'active' : ''} htmlFor="hobby">Hobby/Interest</label>
        <textarea className="materialize-textarea" onChange={changeHandler} defaultValue={hobby && hobby.hobby} name="hobby" id="hobby" />
      </div>
      <div id='submit' className="input-field col s12 center">
          <button type="submit" className="btn green">{ hobby ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default InterestForm
