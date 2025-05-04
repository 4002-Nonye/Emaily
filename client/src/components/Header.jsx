import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StripeBilling from './StripeBilling';

function Header() {
  const { user, status } = useSelector((state) => state.auth);

  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to={user ? '/surveys' : '/'} className='left brand-logo'>
          Emaily
        </Link>
        <ul className='right '>
          {status === 'pending' && ''}
          {!user && status !== 'pending' && (
            <li>
              <a href='/auth/google'>Login with Google</a>
            </li>
          )}

          {user && status !== 'pending' && (
            <>
              <li>
                <StripeBilling />
              </li>
              <li style={{
                margin:'0 10px'
              }}>Credits: {user.credits}</li>
              <li>
                <a href='/api/logout'>Logout</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
