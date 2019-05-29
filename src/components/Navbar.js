import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
	return (
		<nav id="nav" className="navbar navbar-expand-md navbar-dark row sticky-top bg-dark border-bottom">
			<div onClick={() => document.getElementById('sidebar-container').classList.toggle('menu-displayed')} className="navbar-brand bg-dark border-0 text-center text-white col-md-3 col-9 m-0 p-0">
				<img src="https://firebasestorage.googleapis.com/v0/b/bharathanmudaliar.appspot.com/o/imgs%2Fme.png?alt=media&token=8bd13aae-ef67-488a-8506-a82d00c57823" width="30" height="30" className="d-inline-block align-top float-left mr-3 img-fluid rounded-circle" alt="" />
				<span className="float-left">Bharathan Mudaliar</span>
			</div>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
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
