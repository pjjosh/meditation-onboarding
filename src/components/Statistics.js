// src/components/Statistics.js
import React, { useState, useEffect } from 'react';
// TODO: Import Firestore methods like `getDoc` from Firebase Firestore

function Statistics() {
  const [completedSessions, setCompletedSessions] = useState(0);
  const [loading, setLoading] = useState(true); // TODO: Manage loading state

  useEffect(() => {
    const fetchStats = async () => {
      // TODO: Fetch the user's statistics from Firestore
      // Retrieve the count of completed meditation sessions and other relevant stats

      setLoading(false); // TODO: Set loading to false after fetching stats
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div>Loading statistics...</div>; // TODO: Display loading indicator while fetching stats
  }

  return (
    <div>
      <h2>Your Meditation Statistics</h2>
      {/* TODO: Display the number of completed sessions */}
      <p>Completed Sessions: {completedSessions}</p>
      {/* TODO: Add more statistics, e.g., total time meditated, longest streak */}
    </div>
  );
}

export default Statistics;
