import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeLg, faUser,faSignOut,faSignIn} from "@fortawesome/free-solid-svg-icons";


import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";
import NavBar from './components/NavBar';
import EventBus from "./common/EventBus";
import AddPassenger from "./components/AddPassenger";
import AllPassengers from "./components/AllPassengers";

import FooterComponent from "./components/FooterComponent";
import ListFlight from "./components/ListFlight";
import AddFlight from "./components/AddFlight";
import Bookings from "./components/Bookings";
import AddBooking from "./components/AddBooking";
import Search from "./components/search/Search";
import AddDetails from "./components/AddDetails";
import CreatePaymentComponent from "./components/CreatePaymentComponent";
import ListPaymentDetail from "./components/ListPaymentDetails";
import UpdateFlight from "./components/UpdateFlight";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";


const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Airline Reservation
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home<FontAwesomeIcon icon={faHomeLg} />
            </Link>
          </li>

          {/* <li className="nav-item">
            <Link to={"/search-form"} className="nav-link">
              Search
            </Link>
          </li> */}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

<li className="nav-item">
            <Link to={"/aboutus"} className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/contactus"} className="nav-link">
              Contact Us
            </Link>
          </li>

          {/* {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User

              </Link>
             
              
            </li>
          )} */}
        </div>

        

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}<FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
            <li className="nav-item">
              <a href="/home" className="nav-link" onClick={logOut}>
              LogOut<FontAwesomeIcon icon={faSignOut} />
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login<FontAwesomeIcon icon={faSignIn} />
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
    
        <Routes>
        <Route path="/user" element={<NavBar/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>}  /> 
          <Route path="/aboutus" element={<AboutUs/>}  /> 
          <Route path="/contactus" element={<ContactUs/>}  /> 
       
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/user" element={<BoardUser/>} />
          <Route path="/admin" element={<BoardAdmin/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/addDetails" element={<AddDetails/>} />

              <Route path = "/getAllPassengers" element = {<AllPassengers />}></Route>
              <Route path = "/addPassenger" element = {<AddPassenger />}></Route>
             
              <Route path = "/flights" element = {<ListFlight />}></Route>
              <Route path = "/addFlight" element = {<AddFlight />}></Route>
              <Route path = "/editFlight/${flight.id}" element = {<UpdateFlight />}></Route>

              <Route path = "/bookings" element = {<Bookings />}></Route>
              <Route path = "/addBooking" element = {<AddBooking />}></Route>

              <Route path="/add-payment" element={<CreatePaymentComponent/>}></Route>
              <Route path="/payments" element={<ListPaymentDetail/>}></Route>

        </Routes>

        
      </div>
      <FooterComponent />
        
    </div>
  );
};

export default App;
