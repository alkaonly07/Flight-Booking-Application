import React from "react";
import AuthService from "../services/auth.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faHouse,faCircleInfo,faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container" style={{backgroundColor:"black"}}>
      <br></br>
      <header className="jumbotron">
        <h3>
          <strong>Welcome  {currentUser.username} !</strong> 
        </h3>
        <br></br>
      </header>
     
      <p style={{color:"white"}}>
        <strong>Logged in using:</strong>
      </p>

      <p style={{color:"white"}}>
        <strong>Email:</strong> {currentUser.email}
      </p>

      <br></br>
      <div className="text-center">
      <a href="/search" className="btn btn-info btn-lg" style={{marginLeft: "10px" ,marginTop: "10px",color:"black" }}><FontAwesomeIcon icon={faMagnifyingGlass} /><strong> Let's Search a Flight!</strong></a>

      <a href="/home" className="btn btn-success btn-lg" style={{marginLeft: "30px" ,marginTop: "10px",color:"black"  }}><FontAwesomeIcon icon={faHouse}/><strong> Home</strong></a>

      <a href="/aboutUs" className="btn btn-warning btn-lg" style={{marginLeft: "30px" ,marginTop: "10px",color:"black"  }}><FontAwesomeIcon icon={faCircleInfo} /><strong> Info</strong></a>

      <a href="/contactUs" className="btn btn-danger btn-lg" style={{marginLeft: "30px" ,marginTop: "10px" ,color:"black" }}><FontAwesomeIcon icon={faCommentDots} /><strong> Send us a Feedback</strong></a>
      <br></br>
      <br></br>
      <br></br>
      </div>
    </div>
    
  );
};

export default Profile;
