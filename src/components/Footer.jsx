import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2024 Binghamton University State University of New York</p>
        <ul>
          <li><a href="https://www.youtube.com/">Accessibility</a></li>
          <li><a href="https://www.youtube.com/">Emergencies</a></li>
          <li><a href="https://www.youtube.com/">Privacy</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <ul>
          <li><a href="https://www.youtube.com/">contact</a></li>
          <li><a href="https://www.youtube.com/">visit</a></li>
          <li><a href="https://www.youtube.com/">share</a></li>
        </ul>
        <p>Last Updated: 10/24/23</p>
      </div>
    </footer>
  );
};

export default Footer;