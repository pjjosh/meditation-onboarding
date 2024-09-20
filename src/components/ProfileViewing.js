// src/components/ProfileViewing.js
import React, { useState, useEffect } from 'react';
// TODO: Import Firestore methods like `collection`, `getDocs` from Firebase Firestore
import { db } from '../firebaseConfig'; // Ensure Firebase is correctly set up

function ProfileViewing() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true); // TODO: Manage loading state

  useEffect(() => {
    const fetchProfiles = async () => {
      // TODO: Fetch all user profiles from the `users` collection in Firestore
      // Use Firestore collection and query methods to retrieve all documents from `users` collection
      // Example: const querySnapshot = await getDocs(collection(db, 'users'));
      //          const profilesList = querySnapshot.docs.map(doc => doc.data());
      //          setProfiles(profilesList);

      setLoading(false); // TODO: Set loading to false once data is fetched
    };

    fetchProfiles();
  }, []);

  if (loading) {
    return <div>Loading profiles...</div>; // TODO: Display loading indicator while fetching profiles
  }

  return (
    <div>
      <h2>User Profiles</h2>
      <ul>
        {profiles.map((profile, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            {/* TODO: Display profile picture if available */}
            {profile.profilePictureUrl && (
              <img
                src={profile.profilePictureUrl}
                alt={`${profile.name}'s profile`}
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              />
            )}

            {/* TODO: Display the user's name */}
            <h3>{profile.name}</h3>

            {/* TODO: Display the user's email */}
            <p>{profile.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileViewing;
