import React from 'react'
import Logo from './images/images.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                {/* <div className="contaner"> */}
  <a className="navbar-brand" href="#"><img className="logo" src={Logo} alt="logo..." /></a>
  <button className="navbar-toggler "  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faBars} style={{color:'white'}} />
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item active">
        <a className="nav-link text-white" href="#">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">How Work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Contact us</a>
      </li>
    </ul>
   
  </div>
  {/* </div> */}
</nav>
        </div>
    )
}
