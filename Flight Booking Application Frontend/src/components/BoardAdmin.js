import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { Link } from "react-router-dom";
const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      
      <header className="jumbotron">
        <h3>{content}</h3>
        {/* <nav > */}

        
        <nav class="navbar navbar-expand-lg navbar-light bg-black py-3 shadow-sm">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
              <Link to="/getAllPassengers">
                <a class="nav-link active" aria-current="page" href="#">Passengers</a>
                {/* <NavLink activeClassName="active" to="/ListPlantComponent">Plant</NavLink> */}
                </Link>
              </li>
              </ul>
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
    
        <li class="nav-item">
              <Link to="/bookings">
                <a class="nav-link active" aria-current="page" href="#">Bookings</a>
                </Link>
              </li>
              </ul> 

              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
    
    <li class="nav-item">
          <Link to="/flights">
            <a class="nav-link active" aria-current="page" href="#">Flights</a>
            </Link>
          </li>
          </ul> 
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
    
    <li class="nav-item">
          <Link to="/payments">
            <a class="nav-link active" aria-current="page" href="#">Payment List</a>
            </Link>
          </li>
          </ul> 
             
        </nav>
      </header>
    </div>
  );
};

export default BoardAdmin;
