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
      <form method="post" onSubmit={ submitHnadler } className="col-md-6 m-5" action="">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" onChange={changeHandler} className="form-control" placeholder="Project TItle" defaultValue={project && project['title']} name="title" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="s-desc">Short Description:</label>
          <input type="text" onChange={changeHandler} className="form-control" placeholder="One Line Description" defaultValue={project && project['s-desc']} name="s-desc" id="s-desc" />
        </div>
        <div className="form-group">
          <label htmlFor="desc-1">Description 1:</label>
          <input type="text" onChange={changeHandler} className="form-control" placeholder="First Paragraph Description" defaultValue={project && project['desc-1']} name="desc-1" id="desc-1" />
        </div>
        <div className="form-group">
          <label htmlFor="desc-2">Description 2:</label>
          <input type="text" onChange={changeHandler} className="form-control" placeholder="Second Paragraph Description" defaultValue={project && project['desc-2']} name="desc-2" id="desc-2" />
        </div>
        <div className="form-group">
          <label htmlFor="desc-3">Description 3:</label>
          <input type="text" onChange={changeHandler} className="form-control" placeholder="Third Paragraph Description" defaultValue={project && project['desc-3']} name="desc-3" id="desc-3" />
        </div>
        <div className="form-group">
          <label htmlFor="high-1">Highlight 1:</label>
          <input type="text" onChange={changeHandler} className="form-control" placeholder="First Point of Highlights" defaultValue={project && project['high-1']} name="high-1" id="high-1" />
        </div>
        <div className="form-group">
          <label htmlFor="high-2">Highlight 2:</label>
          <input type="text" onChange={changeHandler} className="form-control" placeholder="Second Point of Highlights" defaultValue={project && project['high-2']} name="high-2" id="high-2" />
        </div>
        <div className="form-group">
          <label htmlFor="high-3">Highlight 3:</label>
          <input type="text" onChange={changeHandler} className="form-control" placeholder="Third Point of Highlights" defaultValue={project && project['high-3']} name="high-3" id="high-3" />
        </div>
        <div className="form-group">
          <label htmlFor="high-4">Highlight 4:</label>
          <input type="text" onChange={changeHandler} className="form-control" placeholder="Fourth Point of Highlights" defaultValue={project && project['high-4']} name="high-4" id="high-4" />
        </div>
        <div className="form-group">
          <label htmlFor="high-5">Highlight 5:</label>
          <input type="text" onChange={changeHandler} className="form-control" placeholder="Fifth Point of Highlights" defaultValue={project && project['high-5']} name="high-5" id="high-5" />
        </div>
        <div className="form-group">
          <label htmlFor="repo">Repository Link:</label>
          <input type="text" onChange={changeHandler} className="form-control text-black" placeholder="Repository Link" defaultValue={project && project['repo']} name="repo" id="repo" />
        </div>
        <div id='submit' className="form-group col-12 text-center">
            <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-md-4 col-6">{ project ? "Update" : "Submit" }</button>
        </div>
      </form>
    )
}

export default ProjectForm
