import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
         Welcome <strong>{currentUser.username}</strong> 
        </h3>
      </header>
     
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>

      <a href="/search" className="btn btn-warning" style={{marginLeft: "10px" ,marginTop: "10px" }}><strong>Let's Search a Flight!</strong></a>
    </div>
    
  );
};

export default Profile;
