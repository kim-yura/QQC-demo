import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NavBar from './components/NavBar/NavBar';

import ProtectedRoute from './components/auth/ProtectedRoute';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import { authenticate } from './store/session';

import Home from './components/Home';
import FAQ from './components/FAQ';

import Directory from './components/Directory/Directory';
import NewForm from './components/Directory/NewForm';
import EditForm from './components/Directory/EditForm';

import DiscountDirectory from './components/DirectoryDiscounts/DiscountDirectory';
import NewDiscountForm from './components/DirectoryDiscounts/NewDiscountForm';
import EditDiscountForm from './components/DirectoryDiscounts/EditDiscountForm';

import UserProfile from './components/UserProfile/UserProfile';

import PageNotFound from './components/PageNotFound';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route path='/' exact={true} >
          <Home />
        </Route>

        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>

        <Route path='/faq' exact={true}>
          <FAQ />
        </Route>

        <Route path='/makers' exact={true}>
          <Directory />
        </Route>

        <ProtectedRoute path='/new' exact={true}>
          <NewForm />
        </ProtectedRoute>
        <ProtectedRoute path='/edit/:id' exact={true}>
          <EditForm />
        </ProtectedRoute>

        <Route path='/discounts' exact={true}>
          <DiscountDirectory />
        </Route>

        <ProtectedRoute path='/discounts/new' exact={true}>
          <NewDiscountForm />
        </ProtectedRoute>
        <ProtectedRoute path='/discounts/edit/:id' exact={true}>
          <EditDiscountForm />
        </ProtectedRoute>

        <ProtectedRoute path='/users/:userId' exact={true}>
          <UserProfile />
        </ProtectedRoute>

        <Route path='/404' exact={true}>
          <PageNotFound />
        </Route>

        <PageNotFound />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
