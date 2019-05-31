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
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Course Title" defaultValue={course && course.title} name="title" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="offeredBy">Offered By:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Course Offered By" defaultValue={course && course.offeredBy} name="offeredBy" id="offeredBy" />
      </div>
      <div className="form-group">
        <label htmlFor="plateform">Plateform:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Course Plateform" defaultValue={course && course.plateform} name="plateform" id="plateform" />
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

export default CourseForm
