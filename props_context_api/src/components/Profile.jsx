import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>PROFILE</h1>

      <h2>Name: {user.name}</h2>
      <h2>City: {user.city}</h2>
      <h2>Profession: {user.profession}</h2>
    </div>
  );
};

export default Profile;
