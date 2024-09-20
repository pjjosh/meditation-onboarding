// src/components/MeditationSessions.js
import React, { useState, useEffect } from 'react';
// TODO: Import Firestore functions like `collection`, `getDocs` from Firebase Firestore

function MeditationSessions() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true); // TODO: Manage loading state

  useEffect(() => {
    const fetchSessions = async () => {
      // TODO: Fetch meditation sessions from Firestore, including the image field
      // Use Firestore collection and query methods to retrieve the `meditation_sessions` data

      // TODO: Sort the sessions by duration

      // TODO: Set the sessions in state using setSessions
      setLoading(false); // TODO: Set loading to false after fetching data
    };

    fetchSessions();
  }, []);

  if (loading) {
    return <div>Loading sessions...</div>;
  }

  return (
    <div>
      <h2>Meditation Sessions</h2>
      <ul>
        {sessions.map((session) => (
          <li key={session.id} style={{ marginBottom: '20px' }}>
            {/* TODO: Display the session title */}
            {/* TODO: Display the session image */}
            {/* TODO: Display the session description */}
            {/* TODO: Display the session duration */}
            {/* TODO: Add more details or buttons for interaction, like "Mark as Completed" */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MeditationSessions;
