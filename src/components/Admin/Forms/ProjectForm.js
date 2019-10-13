import React, { useState } from 'react'

const ProjectForm = ({ project, changeView, add, update }) => {

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

    if(project){
      update(state, project.id)
    } else {
      add(state)
    }

    changeView()
  }

  return (
      <form method="post" onSubmit={ submitHnadler } className="col m6 s12" action="">
        <div className="input-field">
          <label className={project ? 'active' : ''} htmlFor="title">Title</label>
          <input type="text" onChange={changeHandler} defaultValue={project && project['title']} name="title" id="title" />
        </div>
        <div className="input-field">
          <label className={project ? 'active' : ''} htmlFor="s-desc">Short Description</label>
          <textarea className="materialize-textarea" onChange={changeHandler} defaultValue={project && project['s-desc']} name="s-desc" id="s-desc" />
        </div>
        <div className="input-field">
          <label className={project ? 'active' : ''} htmlFor="desc-1">Description 1</label>
          <textarea className="materialize-textarea" onChange={changeHandler} defaultValue={project && project['desc-1']} name="desc-1" id="desc-1" />
        </div>
        <div className="input-field">
          <label className={project ? 'active' : ''} htmlFor="desc-2">Description 2</label>
          <textarea className="materialize-textarea" onChange={changeHandler} defaultValue={project && project['desc-2']} name="desc-2" id="desc-2" />
        </div>
        <div className="input-field">
          <label className={project ? 'active' : ''} htmlFor="desc-3">Description 3</label>
          <textarea className="materialize-textarea" onChange={changeHandler} defaultValue={project && project['desc-3']} name="desc-3" id="desc-3" />
        </div>
        <div className="input-field">
          <label className={project ? 'active' : ''} htmlFor="high-1">Highlight 1</label>
          <input type="text" onChange={changeHandler} defaultValue={project && project['high-1']} name="high-1" id="high-1" />
        </div>
        <div className="input-field">
          <label className={project ? 'active' : ''} htmlFor="high-2">Highlight 2</label>
          <input type="text" onChange={changeHandler} defaultValue={project && project['high-2']} name="high-2" id="high-2" />
        </div>
        <div className="input-field">
          <label className={project ? 'active' : ''} htmlFor="high-3">Highlight 3</label>
          <input type="text" onChange={changeHandler} defaultValue={project && project['high-3']} name="high-3" id="high-3" />
        </div>
        <div className="input-field">
          <label className={project ? 'active' : ''} htmlFor="high-4">Highlight 4</label>
          <input type="text" onChange={changeHandler} defaultValue={project && project['high-4']} name="high-4" id="high-4" />
        </div>
        <div className="input-field">
          <label className={project ? 'active' : ''} htmlFor="high-5">Highlight 5</label>
          <input type="text" onChange={changeHandler} defaultValue={project && project['high-5']} name="high-5" id="high-5" />
        </div>
        <div className="input-field">
          <label className={project ? 'active' : ''} htmlFor="repo">Repository Link</label>
          <input type="text" onChange={changeHandler} defaultValue={project && project['repo']} name="repo" id="repo" />
        </div>
        <div id='submit' className="input-field col s12 center">
            <button type="submit" className="btn green center">{ project ? "Update" : "Submit" }</button>
        </div>
      </form>
    )
}

export default ProjectForm
