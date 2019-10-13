import React from 'react';

const SideBar = () => {
  const hide = e => {
    if(e.target.id === 'sidebar-container'){
      e.target.classList.remove('menu-displayed')
    }
  }

  return (
    <div id="sidebar-container" onClick={hide} className="col m3">
      <div id="sidebar">
        <div id="me" className="row">
          <img src="https://firebasestorage.googleapis.com/v0/b/bharathanmudaliar.appspot.com/o/imgs%2Fme.jpg?alt=media&token=e9e0f9d8-bd37-4e60-81e3-f49529b6b103" alt="Bharathan Mudaliar" />
          <h1>Bharathan Mudaliar</h1>
          <h5>BE (CSE) student</h5>
          <span>An Enthusiastic learner on MOOC Platforms, especially passionate about Deep Learning</span>
        </div>
        <div id="contact" className="row">
          <ul className="contact-info">
            <li>
              <a href="mailto:vbharathan.2013@gmail.com" rel="noopener noreferrer" target='_blank' className="fa fa-envelope-square"><span>E-mail</span></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/v-bharathan-mudaliar-51289b157/" rel="noopener noreferrer" target='_blank' className="fa fa-linkedin"><span>Linkedin</span></a>
            </li>
            <li>
              <a href="https://www.facebook.com/bharathan.vs" rel="noopener noreferrer" target='_blank' className="fa fa-facebook"><span>Facebook</span></a>
            </li>
            <li>
              <a href="https://github.com/bharat029/" rel="noopener noreferrer" target='_blank' className="fa fa-github"><span>Github</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
  
export default SideBar