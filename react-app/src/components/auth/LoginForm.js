import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

import './auth.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    setErrors([]);
    e.preventDefault();
    let errorsArr = [];
    const data = await dispatch(login(email, password));
    if (data) {
      errorsArr.push(data);
    };
    if (errorsArr.length) {
      setErrors(['Username or password is incorrect.']);
    };
  };


  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  };

  const handleDemoLogin = async (e) => {
    e.preventDefault();
    const demoEmail = 'demo@demo.com';
    const demoPassword = 'devpassword123';
    await dispatch(login(demoEmail, demoPassword));
  };

  return (
    <form className='login-form' onSubmit={onLogin}>
      <h3>Login</h3>
      <div className='signup-element'>
        <label>Email address</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
          required={true}
        />
      </div>
      <div className='signup-element'>
        <label>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
          required={true}
        />
      </div>
      <button type='submit'>Login</button>
      <button onClick={handleDemoLogin}>Demo Login</button>
      {errors.length ?
        <div className='login-errors'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        : ''}
    </form>
  );
};

export default LoginForm;
