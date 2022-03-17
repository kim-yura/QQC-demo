import React from 'react';
import { NavLink } from 'react-router-dom';

import './auth.css';

const LoginSignup = () => {
    return (
        <div className='login-signup'>
            <li>
                <NavLink className='login-signup-link navbar-option' to='/login' exact={true}>
                    login
                </NavLink>
            </li>
            <li>|</li>
            <li>
                <NavLink className='login-signup-link navbar-option' to='/sign-up' exact={true}>
                    sign up
                </NavLink>
            </li>
        </div>
    )
}

export default LoginSignup;
