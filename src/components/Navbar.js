import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom';
import M from 'materialize-css'

const Navbar = () => {  
  useEffect(() => {
    let menuele = document.querySelector('.dropdown-trigger[data-target="mobile-demo"]')
    M.Dropdown.init(menuele, { alignment: 'right', coverTrigger: false, constrainWidth: false })
  }, [])
  
	return (
    <nav className="black">
      <div className="nav-wrapper container">
        <div className="row">
          <h1 role="button" onClick={e => document.querySelector('#sidebar-container').classList.toggle('menu-displayed')} className="center-align" id="title">Bharathan Mudaliar</h1>
          <a href="/" role="button" data-target="mobile-demo" id='menu' className="col s10 m6 right hide-on-large-only dropdown-trigger"><i className="material-icons">menu</i></a>
          <ul id="menu-content" className="col m6 right hide-on-med-and-down">
            <li><NavLink exact to="/" className="center-align">About Me</NavLink></li>
            <li><NavLink to="/projects" className="center-align">Projects</NavLink></li>
            <li><NavLink to="/courses" className="center-align">Courses</NavLink></li>
            <li><NavLink to="/cv" className="center-align">CV</NavLink></li>
          </ul>
        </div>
      </div>
      <ul id="mobile-demo" className="dropdown-content hide-on-large-only black white-text">
        <li><NavLink exact to="/" className="center-align">About Me</NavLink></li>
        <li><NavLink to="/projects" className="center-align">Projects</NavLink></li>
        <li><NavLink to="/courses" className="center-align">Courses</NavLink></li>
        <li><NavLink to="/cv" className="center-align">CV</NavLink></li>
      </ul>
    </nav>
	)
}

export default Navbar
