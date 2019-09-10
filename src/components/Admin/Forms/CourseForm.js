import React, { useState } from 'react'

const CourseForm = ({ course, changeView, add, update }) => {
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
      update(state, course.id)
    } else {
      add(state)
    }

    changeView(e)
  }

  return (
    <form method="post" onSubmit={submitHnadler} className="col-md-6 m-5" action="">
      <div className="input-field">
        <label className={course ? 'active' : ''} htmlFor="title">Title</label>
        <input type="text" onChange={changeHandler} defaultValue={course && course.title} name="title" id="title" />
      </div>
      <div className="input-field">
        <label className={course ? 'active' : ''} htmlFor="offeredBy">Offered By</label>
        <input type="text" onChange={changeHandler} defaultValue={course && course.offeredBy} name="offeredBy" id="offeredBy" />
      </div>
      <div className="input-field">
        <label className={course ? 'active' : ''} htmlFor="plateform">Plateform</label>
        <input type="text" onChange={changeHandler} defaultValue={course && course.plateform} name="plateform" id="plateform" />
      </div>
      <div className="input-field">
        <label className={course ? 'active' : ''} htmlFor="score">Score</label>
        <input type="number" onChange={changeHandler} defaultValue={course && course.score} name="score" id="score" />
      </div>
      <div className="input-field">
        <label className={course ? 'active' : ''} htmlFor="certi">Certificate Link</label>
        <input type="text" onChange={changeHandler} defaultValue={course && course.certi} name="certi" id="certi" />
      </div>
      <div id='submit' className="input-field col s12 center">
        <button type="submit" className="btn green">{ course ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default CourseForm
