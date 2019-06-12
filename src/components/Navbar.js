import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
	const collapse = (e) => {
		document.querySelector('.collapse').classList = "collapse navbar-collapse justify-content-end"
		document.querySelector('#sidebar-container').classList.remove('menu-displayed')
	}
	return (
		<nav id="nav" className="navbar navbar-expand-md navbar-dark row sticky-top bg-dark border-bottom">
			<div onClick={() => document.getElementById('sidebar-container').classList.toggle('menu-displayed')} className="navbar-brand bg-dark border-0 text-center text-white col-md-3 col-9 m-0 p-0">
				<span className="float-left">Bharathan Mudaliar</span>
			</div>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse justify-content-end" onClick={collapse} id="navbarNav">
				<ul className="navbar-nav col-md-9 mr-3">
					<li className="nav-item">
						<NavLink className="nav-link text-white text-center" exact to="/">About me </NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link text-white text-center" to="/projects">Projects</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link text-white text-center" to="/courses">Courses</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link text-white text-center" to="/cv">CV</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
