import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import Button from "../../component/Button";

const NavBar = () => {
  return (
    <>
      <div className="NavBar-Main">
        <div className="NavBar-Main-left">
          <Link to="/Home" className="NavBar-Main-center-NavLink">
            Snackus
          </Link>
        </div>
        <div className="NavBar-Main-center">
          <div>
            <NavLink
              className={({ isActive }) =>
                `NavBar-Main-center-NavLink ${isActive ? "active" : "inactive"}`
              }
              to="/Home"
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
            >
              ABOUT
            </NavLink>
          </div>
        </div>
        <div className="NavBar-Main-Right">
          <div>
            <NavLink className="NavBar-Main-center-NavLink" to="/">
              <Button
                className="NavBar-Main-center-NavLink-Button"
                label="Login"
              />
            </NavLink>
          </div>
          <div>
            <NavLink className="NavBar-Main-center-NavLink" to="/Oder">
              profile
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
