// src/components/Settings.js
import React, { useState, useEffect } from 'react';

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // TODO: Load dark mode preference from localStorage or Firebase
    const storedPreference = localStorage.getItem('darkMode');
    if (storedPreference) {
      setDarkMode(JSON.parse(storedPreference));
    }
  }, []);

  useEffect(() => {
    // TODO: Save dark mode preference to localStorage or Firebase
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div>
      <h2>Settings</h2>
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        Dark Mode
      </label>
      {/* TODO: Apply dark mode styles to the rest of the app */}
    </div>
  );
}

export default Settings;
