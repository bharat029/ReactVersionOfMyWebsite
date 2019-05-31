import React, { useState } from 'react'

const CSForm = ({ ve, changeView, add, update }) => {
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

    if(ve){
      update(state, ve.id)
    } else {
      add(state)
    }

    changeView(e)
  }

  return (
    <form method="post" onSubmit={submitHnadler} className="col-md-6 m-5" action="">
      <div className="form-group">
        <label htmlFor="title">Volunteer Experience Title:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Volunteer Experience Title" defaultValue={ve && ve.title} name="title" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="desc">Volunteer Experience Description:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Volunteer Experience Description" defaultValue={ve && ve.desc} name="desc" id="desc" />
      </div>
      <div className="form-group">
        <label htmlFor="high-1">Volunteer Experience Highlight 1:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Volunteer Experience Highlight 1" defaultValue={ve && ve['high-1']} name="high-1" id="high-1" />
      </div>
      <div className="form-group">
        <label htmlFor="high-2">Volunteer Experience Highlight 2:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Volunteer Experience Highlight 2" defaultValue={ve && ve['high-2']} name="high-2" id="high-2" />
      </div>
      <div className="form-group">
        <label htmlFor="high-3">Volunteer Experience Highlight 3:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Volunteer Experience Highlight 3" defaultValue={ve && ve['high-3']} name="high-3" id="high-3" />
      </div>
      <div id='submit' className="form-group col-12 text-center">
          <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-md-4 col-6">{ ve ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default CSForm
