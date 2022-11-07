import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { Link,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

const BoardAdmin = () => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

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
              <img src="https://img.freepik.com/premium-vector/people-different-nationalities-religions-cartoon-characters-multinational-society_559729-89.jpg?w=2000" 
                style={{width:'10rem'}} />
                <a class="nav-link active ms-5" aria-current="page" href="#">Passengers</a>
                
                </Link>
              </li>
              
              </ul>
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
    
        <li class="nav-item">
              <Link to="/bookings">
              <img src="https://media.istockphoto.com/vectors/tickets-vector-close-up-top-view-party-film-festival-entry-isolated-vector-id1091727024?k=20&m=1091727024&s=612x612&w=0&h=qJyBzNKjXfU5DdhP22TDp7u2BWZwsNLJ3vl66UOwcgo=" 
                style={{width:'10rem'}} />
                <a class="nav-link active" aria-current="page" href="#">Bookings</a>
                </Link>
              </li>
              </ul> 

              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              
    <li class="nav-item">
          <Link to="/flights">
          <img src="https://images.moneycontrol.com/static-mcnews/2021/04/Aviation-featured.jpg?impolicy=website&width=770&height=431" 
                style={{width:'10rem',height: '10rem'}} />
            <a class="nav-link active" aria-current="page" href="#">Flights</a>
            </Link>
          </li>
          </ul> 

          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              
          <li class="nav-item">
          <Link to="/payments">
          <img src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2020/12/24/rupee-119-928374-1608203267-930769-1608779925.jpg?itok=lQSnnDvh" 
                style={{width:'10rem',height: '10rem'}} />
            <a class="nav-link active" aria-current="page" href="#">Payments</a>
            </Link>
          </li>
          </ul> 
             
        </nav>
      </header>
      <div>
        <button className="btn btn-success" style={{width: '8rem',color: 'white'}} onClick={() => navigate(-1)}><strong><FontAwesomeIcon icon={faLeftLong} /> Back</strong></button>
      </div>
    </div>
    
  );
};

export default BoardAdmin;
