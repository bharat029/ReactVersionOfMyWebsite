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
    <form method="post" onSubmit={submitHnadler} className="co m6 s12" action="">
      <div className="input-field">
        <label className={ve? 'active' : ''} htmlFor="title">Title</label>
        <input type="text" onChange={changeHandler} defaultValue={ve && ve.title} name="title" id="title" />
      </div>
      <div className="input-field">
        <label className={ve? 'active' : ''} htmlFor="desc">Description</label>
        <input type="text" onChange={changeHandler} defaultValue={ve && ve.desc} name="desc" id="desc" />
      </div>
      <div className="input-field">
        <label className={ve? 'active' : ''} htmlFor="high-1">Highlight 1</label>
        <input type="text" onChange={changeHandler} defaultValue={ve && ve['high-1']} name="high-1" id="high-1" />
      </div>
      <div className="input-field">
        <label className={ve? 'active' : ''} htmlFor="high-2">Highlight 2</label>
        <input type="text" onChange={changeHandler} defaultValue={ve && ve['high-2']} name="high-2" id="high-2" />
      </div>
      <div className="input-field">
        <label className={ve? 'active' : ''} htmlFor="high-3">Highlight 3</label>
        <input type="text" onChange={changeHandler} defaultValue={ve && ve['high-3']} name="high-3" id="high-3" />
      </div>
      <div id='submit' className="input-field col s12 center">
          <button type="submit" className="btn green">{ ve ? "Update" : "Submit" }</button>
      </div>
    </form>
  )
}

export default CSForm
