import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {  
  const toggleMenu = (e) => {
    document.querySelector('#mobile-nav').classList.toggle('open');
  } 

  return (
    <>
      <nav className="black">
        <div className="nav-wrapper container">
          <div className="row">
            <h1 role="button" onClick={e => document.querySelector('#sidebar-container').classList.toggle('menu-displayed')} className="center-align" id="title">Bharathan Mudaliar</h1>
            <button id='menu-btn' onClick={toggleMenu} className="col s10 m6 hide-on-large-only"><i className="material-icons">menu</i></button>
            <ul id="menu-content" className="col m6 right hide-on-med-and-down">
              <li><NavLink exact to="/" className="center-align">About Me</NavLink></li>
              <li><NavLink to="/projects" className="center-align">Projects</NavLink></li>
              <li><NavLink to="/courses" className="center-align">Courses</NavLink></li>
              <li><NavLink to="/cv" className="center-align">CV</NavLink></li>
            </ul>
          </div>
        </div>
        <ul id="mobile-nav" className="hide-on-large-only close">
          <li><NavLink exact to="/">About Me</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/cv">CV</NavLink></li>
        </ul>
      </nav>
    </>
	)
}

export default Navbar
