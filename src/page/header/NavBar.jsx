import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import Button from "../../component/Button";
import Cart from "../../component/cart/Cart";
// import { useAccordionButton } from "react-bootstrap";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handelLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
  };
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
            {isLoggedIn ? (
              <div className="NavBar-Main-Right-Main">
                <div>
                  <NavLink className="NavBar-Main-center-NavLink" to="/">
                    <Button
                      className="NavBar-Main-center-NavLink-Button"
                      onClick={handelLogout}
                      label="Logout"
                    />
                  </NavLink>
                </div>
                <div>
                  <NavLink className="NavBar-Main-center-NavLink" to="/Cart">
                    Cart
                  </NavLink>
                </div>
              </div>
            ) : (
              <div>
                <NavLink className="NavBar-Main-center-NavLink" to="/">
                  Login
                </NavLink>
              </div>
            )}
          </div>
          {/* <div>
            <NavLink className="NavBar-Main-center-NavLink" to="/Oder">
              profile
            </NavLink>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
