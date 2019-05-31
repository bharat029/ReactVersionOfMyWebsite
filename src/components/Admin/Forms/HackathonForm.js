import React, { useState } from 'react'

const CSForm = ({ hackathon, changeView, add, update }) => {
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

    if(hackathon){
      update(state, hackathon.id)
    } else {
      add(state)
    }

    changeView(e)
  }

  return (
    <form method="post" onSubmit={submitHnadler} className="col-md-6 m-5" action="">
      <div className="form-group">
        <label htmlFor="title">Hackathon Title:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Hackathon Title" defaultValue={hackathon && hackathon.title} name="title" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="desc">Hackathon Description:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Hackathon Description" defaultValue={hackathon && hackathon.desc} name="desc" id="desc" />
      </div>
      <div className="form-group">
        <label htmlFor="high-1">Hackathon Highlight 1:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Hackathon Highlight 1" defaultValue={hackathon && hackathon['high-1']} name="high-1" id="high-1" />
      </div>
      <div className="form-group">
        <label htmlFor="high-2">Hackathon Highlight 2:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Hackathon Highlight 2" defaultValue={hackathon && hackathon['high-2']} name="high-2" id="high-2" />
      </div>
      <div className="form-group">
        <label htmlFor="high-3">Hackathon Highlight 3:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Hackathon Highlight 3" defaultValue={hackathon && hackathon['high-3']} name="high-3" id="high-3" />
      </div>
      <div id='submit' className="form-group col-12 text-center">
          <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-md-4 col-6">{ hackathon ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default CSForm
