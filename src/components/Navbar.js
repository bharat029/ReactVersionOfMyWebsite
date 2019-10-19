import React from 'react'
import {NavLink} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {  
  const toggleMenu = (e) => {
    document.querySelector('#mobile-nav').classList.toggle('open');
  } 

  return (
    <nav className="black">
      <ul id="mobile-nav" className="hide-on-large-only">
        <li><NavLink exact to="/">About Me</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
        <li><NavLink to="/cv">CV</NavLink></li>
      </ul>
      <div className="nav-wrapper black">
        <div className="row">
          <h1 role="button" data-target="sidebar" className="sidenav-trigger center-align hide-on-med-and-up">Bharathan Mudaliar</h1>
          <h1 className="center-align hide-on-small-and-down">Bharathan Mudaliar</h1>
          <button id='menu-btn' onClick={toggleMenu} className="col s10 m6 hide-on-large-only"><i className="material-icons">menu</i></button>
          <ul id="menu-content" className="col m6 right hide-on-med-and-down">
            <li><NavLink exact to="/" className="center-align">About Me</NavLink></li>
            <li><NavLink to="/projects" className="center-align">Projects</NavLink></li>
            <li><NavLink to="/courses" className="center-align">Courses</NavLink></li>
            <li><NavLink to="/cv" className="center-align">CV</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
	)
}

export default Navbar
