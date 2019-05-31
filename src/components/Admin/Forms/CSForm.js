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
    <form method="post" onSubmit={submitHnadler} className="col-md-6 m-5" action="">
      <div className="form-group">
        <label htmlFor="title">Skill Title:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Skill Title" defaultValue={cskill && cskill.title} name="title" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="desc">Skill Description:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Skill Description" defaultValue={cskill && cskill.desc} name="desc" id="desc" />
      </div>
      <div id='submit' className="form-group col-12 text-center">
          <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-md-4 col-6">{ cskill ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default CSForm
