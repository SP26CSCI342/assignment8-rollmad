import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation.jsx';

import HomePage from '../../pages/HomePage.jsx';
import LoginForm from '../../forms/LoginForm.jsx';
import SignupForm from '../../forms/SignupForm.jsx';
import Profile from '../../pages/Profile.jsx';
import ProtectedRoute from "../ProtectedRoute.jsx";
import PageNotFound from '../../pages/PageNotFound.jsx';


export default function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
