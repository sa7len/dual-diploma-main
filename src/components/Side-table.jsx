import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <div className="side-menu">
      <h2>Dual-Diploma Programs</h2>
      <ul>
        <li> <Link to="/about">About</Link></li>
        <li ><Link to="/admission">Admission</Link></li>
        <li>Current Students</li>
        <li>Alumni</li>
        <li>Academic Roadmap</li>
        <li> <Link to="/contact">Contact us</Link></li>
      </ul>
    </div>
  );
}

export default SideMenu;