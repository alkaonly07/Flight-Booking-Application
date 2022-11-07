import React from 'react'
import { Link, NavLink } from "react-router-dom";
// import { FaHome } from 'react-icons/fa';
import EventBus from '../common/EventBus';


export default function NavBar() {
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  // const [showAdminBoard, setShowAdminBoard] = useState(false);
  // const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     setCurrentUser(user);
  //     setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
  //     setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
  //   }

  //   EventBus.on("logout", () => {
  //     logOut();
  //   });

  //   return () => {
  //     EventBus.remove("logout");
  //   };
  // }, []);

  // const logOut = () => {
  //   AuthService.logout();
  //   setShowModeratorBoard(false);
  //   setShowAdminBoard(false);
  //   setCurrentUser(undefined);
  // };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div class="container">
          {/* <a class="navbar-brand fw-bold fs-4" href="#">LOGO</a> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
                <Link to="/">
                  
                <a class="nav-link active" aria-current="page" href="#"> Home</a>
                </Link>
                
                <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
              </li>
              <li class="nav-item">
              <Link to="/about">
                <a class="nav-link active" aria-current="page" href="#">About Us</a>
                </Link>
              </li>
               */}
              <li class="nav-item">
              <Link to="/plant">
                <a class="nav-link active" aria-current="page" href="#">Plant</a>
                {/* <NavLink activeClassName="active" to="/ListPlantComponent">Plant</NavLink> */}
                </Link>
              </li>
             
              <li class="nav-item">
              <Link to="/planter">
                <a class="nav-link active" aria-current="page" href="#">Planter</a>
                </Link>
              </li>
              {/* <li class="nav-item">
              <Link to="/contact">
                <a class="nav-link active" aria-current="page" href="#">Contact</a>
                </Link>
              </li> */}
              {/* <li class="nav-item">
              <Link to="/customer">
                <a class="nav-link active" aria-current="page" href="#">Customer</a>
                </Link>
              </li> */}
              <li class="nav-item">
              <Link to="/order">
                <a class="nav-link active" aria-current="page" href="#">Order</a>
                </Link>
              </li>
              {/* <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Compliance</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">StatusReport</a>
        </li> */}
            </ul>
            {/* <div className="buttons">
              <ul>
                <Link to ="/UserComponent">
                <a className='btn btn-outline-dark'>
                  <li className='fa fa-sign-in me-1'> Login </li>
                </a>
                </Link>
                <Link to="/SignUp">
                  <a className='btn btn-outline-dark ms-2'>

                    <li className='fa fa-user-plus me-1 '> SignUp </li>

                  </a>
                </Link>
              </ul>

            </div> */}
          </div>
        </div>
      </nav>
    </div>
  )
}
