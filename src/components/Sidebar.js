import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
      <div id="me">
        <img className="center" src="https://firebasestorage.googleapis.com/v0/b/bharathanmudaliar.appspot.com/o/imgs%2Fme.jpg?alt=media&token=e9e0f9d8-bd37-4e60-81e3-f49529b6b103" alt="Bharathan Mudaliar" />
        <h2 className="center">Bharathan Mudaliar</h2>
        <h5 className="center">BE (CSE) student</h5>
        <span className="center">An Enthusiastic learner, especially passionate about Deep Learning and Web Debelopement</span>
      </div>
      <ul id="contact-info">
        <li>
          <a href="mailto:vbharathan.2013@gmail.com" rel="noopener noreferrer" target='_blank' className="fa fa-envelope-square"><span>E-mail</span></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bharathanmudaliar/" rel="noopener noreferrer" target='_blank' className="fa fa-linkedin"><span>Linkedin</span></a>
        </li>
        <li>
          <a href="https://github.com/bharat029/" rel="noopener noreferrer" target='_blank' className="fa fa-github"><span>Github</span></a>
        </li>
      </ul>
    </>
  )
}
  
export default Sidebar