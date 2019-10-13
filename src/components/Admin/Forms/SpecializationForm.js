import React, { useState } from 'react'

const SpecializationForm = ({ course, sid, changeView, add, update }) => {
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

    if(course){
      update(state, sid)
    } else {
      add(state)
    }

    changeView(e)
  }

  return (
    <form method="post" onSubmit={submitHnadler} className="col m6 s12" action="">
      <div className="input-field">
        <label className={course ? 'active' : ''} htmlFor="title">Title</label>
        <input type="text" onChange={changeHandler} defaultValue={course && course.title} name="title" id="title" />
      </div>
      <div className="input-field">
        <label className={course ? 'active' : ''} htmlFor="offeredBy">Offered By</label>
        <input type="text" onChange={changeHandler} defaultValue={course && course.offeredBy} name="offeredBy" id="offeredBy" />
      </div>
      <div className="input-field">
        <label className={course ? 'active' : ''} htmlFor="plateform">Platform</label>
        <input type="text" onChange={changeHandler} defaultValue={course && course.plateform} name="plateform" id="plateform" />
      </div>
      <div className="input-field">
        <label className={course ? 'active' : ''} htmlFor="certi">Certificate Link</label>
        <input type="text" onChange={changeHandler} defaultValue={course && course.certi} name="certi" id="certi" />
      </div>
      <div id='submit' className="input-field col s12 center">
        <button type="submit" className="btn green center">{ course ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default SpecializationForm
