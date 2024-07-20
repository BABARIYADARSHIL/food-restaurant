import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import Button from "../../component/Button";
import { useSelector } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const token = localStorage.getItem("jwtToken");
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="NavBar-Main">
      <div className="NavBar-Main-left">
        <Link to="/Home" className="NavBar-Main-center-NavLink">
          Snackus
        </Link>
      </div>
      <div className={`NavBar-Main-center ${isMenuOpen ? "open" : ""}`}>
        <div>
          <NavLink
            className={({ isActive }) =>
              `NavBar-Main-center-NavLink ${isActive ? "active" : "inactive"}`
            }
            to="/Home"
            onClick={toggleMenu}
          >
            HOME
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              `NavBar-Main-center-NavLink ${isActive ? "active" : "inactive"}`
            }
            to="/Menu"
            onClick={toggleMenu}
          >
            MENU
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              `NavBar-Main-center-NavLink ${isActive ? "active" : "inactive"}`
            }
            to="/About"
            onClick={toggleMenu}
          >
            ABOUT
          </NavLink>
        </div>
      </div>
      <div className="NavBar-Main-Right">
        <div className="NavBar-Main-Right-Main">
          {isLoggedIn ? (
            <>
              <Button
                className="NavBar-Main-center-NavLink-Button"
                onClick={handleLogout}
                label="Logout"
              />
              <NavLink className="NavBar-Main-center-NavLink" to="/Cart">
                Cart
              </NavLink>
            </>
          ) : (
            <NavLink className="NavBar-Main-center-NavLink" to="/">
              Login
            </NavLink>
          )}
        </div>
        <button className="navbar-toggler" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
