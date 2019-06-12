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
    <form method="post" onSubmit={submitHnadler} className="col-md-6 m-5" action="">
      <div className="form-group">
        <label htmlFor="title">Skill Title:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Internship Title" defaultValue={internship && internship.title} name="title" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="dur">Internship Duration:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Internship Duration" defaultValue={internship && internship.dur} name="dur" id="dur" />
      </div>
      <div className="form-group">
        <label htmlFor="certi">Internship Description:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Internship Description" defaultValue={internship && internship.desc} name="desc" id="desc" />
      </div>
      <div className="form-group">
        <label htmlFor="desc">Internship Certificate Link:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Internship Certificate Link" defaultValue={internship && internship.certi} name="certi" id="certi" />
      </div>
      <div id='submit' className="form-group col-12 text-center">
          <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-md-4 col-6">{ internship ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default CSForm
