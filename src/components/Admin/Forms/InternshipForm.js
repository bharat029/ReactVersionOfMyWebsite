import React, { useState } from 'react'

const CSForm = ({ internship, changeView, add, update }) => {
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

    if(internship){
      update(state, internship.id)
    } else {
      add(state)
    }

    changeView(e)
  }
  
  return (
    <form method="post" onSubmit={submitHnadler} className="col m6 s12" action="">
      <div className="input-field">
        <label className={internship? 'active' : ''} htmlFor="title">Title</label>
        <input type="text" onChange={changeHandler} defaultValue={internship && internship.title} name="title" id="title" />
      </div>
      <div className="input-field">
        <label className={internship? 'active' : ''} htmlFor="dur">Duration</label>
        <input type="text" onChange={changeHandler} defaultValue={internship && internship.dur} name="dur" id="dur" />
      </div>
      <div className="input-field">
        <label className={internship? 'active' : ''} htmlFor="certi">Description</label>
        <input type="text" onChange={changeHandler} defaultValue={internship && internship.desc} name="desc" id="desc" />
      </div>
      <div className="input-field">
        <label className={internship? 'active' : ''} htmlFor="desc">Certificate Link</label>
        <input type="text" onChange={changeHandler} defaultValue={internship && internship.certi} name="certi" id="certi" />
      </div>
      <div id='submit' className="input-field col s12 center">
          <button type="submit" className="btn green">{ internship ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default CSForm
