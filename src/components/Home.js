// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
// TODO: Import Firebase sign-out method

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Implement Firebase sign-out functionality
    navigate('/');
  };

  return (
    <div>
      <h2>Welcome to the Meditation App</h2>
      {/* TODO: Implement navigation to Meditation Sessions */}
      <button onClick={() => navigate('/sessions')}>Go to Sessions</button>
      
      {/* TODO: Implement Logout */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
