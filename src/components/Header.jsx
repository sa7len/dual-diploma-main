import React from 'react'
import { Route, Routes,   Link } from 'react-router-dom';
import Main from '../pages/Main';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Admission from '../pages/Admission';

const Header = () => {
  return (
   <div>
     <div className="head">
          <img className='logo' src="https://www.binghamton.edu/assets/img/logo/binghamton-university.png" alt="" />
          <div className="vertical-line"></div>
          <p>Dual Diplima Programs</p>
        </div>
     <div className='main-nav'>
    <div className="nav-container">
    <div className='navbar'>
        <nav>
          <ul>
            <li className='underline-effect'>
              <Link to="/">Main</Link>
            </li>
            <li className='underline-effect'>
              <Link to="/about">About</Link>
            </li >
            <li className='underline-effect'>
              <Link to="/contact">Contact</Link>
            </li>
            <li className='underline-effect'>
              <Link to="/admission">Admission</Link>
            </li>
          </ul>
        </nav>
       
      </div>
    </div>
     </div>
   </div>
  )
}

export default Header