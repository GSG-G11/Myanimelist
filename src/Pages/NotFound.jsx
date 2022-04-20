import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/404.png';
function NotFound() {
  return (
    <div className="page-not-found">
      <div className='Container'>
  
        
          <Link to="/"> <img src={logo} alt="404" /></Link>
      
      </div>
    </div>
  );
}

export default NotFound;
