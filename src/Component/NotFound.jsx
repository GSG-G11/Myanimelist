import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-not-found">
      <div className='Container'>
        <h2>Page Not Found 404</h2>
        <p>
        Go back to
          {' '}
          <Link to="/">Home Page</Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
