import React from "react";

function UserProfile({ name, email, photo }) {
  const displayName = name || "No Name Provided";
  const displayEmail = email || "No Email Provided";
  const displayPhoto =
    photo || "https://via.placeholder.com/150";

  return (
    <div className="profile-card">
      <h2>User Profile</h2>

      <img
        src={displayPhoto}
        alt="User Photo"
        className="photo"
      />

      <p>Name: {displayName}</p>
      <p>Email: {displayEmail}</p>

      {email && (
        <a href={`mailto:${email}`}>Send Email</a>
      )}
    </div>
  );
}

export default UserProfile;