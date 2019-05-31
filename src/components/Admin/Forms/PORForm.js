import React, { useState } from 'react'

const PORForm = ({ por, changeView, add, update }) => {
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

    if(por){
      update(state, por.id)
    } else {
      add(state)
    }

    changeView(e)
  }

  return (
    <form method="post" onSubmit={submitHnadler} className="col-md-6 m-5" action="">
      <div className="form-group">
        <label htmlFor="title">Possitional Of ResponsibleTitle:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Possitional Of ResponsibleTitle" defaultValue={por && por.title} name="title" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="desc">Possitional Of ResponsibleDescription:</label>
        <input type="text" onChange={changeHandler} className="form-control" placeholder="Possitional Of ResponsibleDescription" defaultValue={por && por.desc} name="desc" id="desc" />
      </div>
      <div id='submit' className="form-group col-12 text-center">
          <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-md-4 col-6">{ por ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default PORForm
