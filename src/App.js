// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import MeditationSessions from './components/MeditationSessions';
import Profile from './components/ProfileViewing';
import Statistics from './components/Statistics';
import Settings from './components/Settings';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for changes to the authenticated user
    const unsubscribe = auth.onAuthStateChanged((authenticatedUser) => {
      setUser(authenticatedUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public route: Login */}
          <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />

          {/* Protected routes: Only accessible if user is authenticated */}
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
          <Route path="/sessions" element={user ? <MeditationSessions /> : <Navigate to="/" />} />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} />
          <Route path="/statistics" element={user ? <Statistics /> : <Navigate to="/" />} />
          <Route path="/settings" element={user ? <Settings /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
