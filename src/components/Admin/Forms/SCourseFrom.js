import React, { useState } from 'react'

const SCourseForm = ({ course, sid, changeView, add, update }) => {
  const [state, setState] = useState({ sid})

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

    changeView()
  }

  return (
    <form method="post" onSubmit={submitHnadler} className="col-md-6 m-5" action="">
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Course Title" defaultValue={course && course.title} name="title" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="score">Score:</label>
        <input type="number" onChange={changeHandler} className="form-control" placeholder="Course Score" defaultValue={course && course.score} name="score" id="score" />
      </div>
      <div className="form-group">
        <label htmlFor="certi">Certificate Link:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Course Certificate Link" defaultValue={course && course.certi} name="certi" id="certi" />
      </div>
      <div id='submit' className="form-group col-12 text-center">
        <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-md-4 col-6">{ course ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default SCourseForm