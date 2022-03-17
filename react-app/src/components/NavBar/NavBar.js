
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import LogoutButton from '../auth/LogoutButton';
import LoginSignup from '../auth/LoginSignup';

import './NavBar.css';

const NavBar = () => {
  const user = useSelector(state => state.session.user)

  return (
    <nav>
      <div className='navbar-left'>
        <li>
          <NavLink to='/' exact={true} className='navbar-option'>
            QQC HOME
          </NavLink>
          <NavLink to='/makers' exact={true} className='navbar-option'>
            DIRECTORY
          </NavLink>
          <NavLink to='/discounts' exact={true} className='navbar-option'>
            DISCOUNT CODES
          </NavLink>
          <NavLink to='/faq' exact={true} className='navbar-option'>
            FAQ
          </NavLink>
        </li>
      </div>
      <div className='navbar-right'>
        {(user) ? <NavLink to={`/users/${user.id}`} className='navbar-option'>Welcome, {user.username}!</NavLink> : ''}
        {(user?.username === 'admin' || user?.username === 'DemoUser') ? <div className='logged-in navbar-option'>|</div> : ''}
        {(user?.username === 'admin' || user?.username === 'DemoUser') ? <NavLink className='navbar-option' to={`/new`}>Add to Directory</NavLink> : ''}
        {(user?.username === 'admin' || user?.username === 'DemoUser') ? <div className='logged-in navbar-option'>|</div> : ''}
        {(user?.username === 'admin' || user?.username === 'DemoUser') ? <NavLink className='navbar-option' to={`/discounts/new`}>Add Discount Code</NavLink> : ''}
        {(user) ? <div className='logged-in navbar-option'>|</div> : ''}
        {(user) ? <LogoutButton className='logout-button navbar-option' /> : <LoginSignup className='login-signup' />}
      </div>
    </nav>
  );
}

export default NavBar;
