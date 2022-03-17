import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { login, signUp } from '../../store/session';

import './auth.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    setErrors([]);
    e.preventDefault();
    let errorsArr = [];
    if (password !== repeatPassword) {
      errorsArr.push('Password must match.');
    };

    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    if (!emailRegex.test(email)) {
      errorsArr.push('Please enter a valid email address.');
    };

    setErrors(errorsArr);

    const backendArr = [];
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        backendArr.push(data);
      };
      let temp = [];
      if (Object.values(backendArr)[0]) {
        Object.values(backendArr)[0].forEach(err => {
          const errArr = err.split(' : ');
          temp.push(errArr[1]);
        });
        setErrors(temp);
      };
    };
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
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
    <form className='login-form' onSubmit={onSignUp}>
      <h3>Sign Up</h3>
      <div className='signup-element'>
        <label>Enter a username</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          required={true}
          placeholder='Username'
        ></input>
      </div>
      <div className='signup-element'>
        <label>Enter an email address</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          required={true}
          placeholder='Email address'
        ></input>
      </div>
      <div className='signup-element'>
        <label>Enter a password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          required={true}
          placeholder='Password'
        ></input>
      </div>
      <div className='signup-element'>
        <label>Repeat password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          placeholder='Password'
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
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

export default SignUpForm;
