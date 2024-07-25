import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import Button from "../../component/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/loginUserData/action/index";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userReducerData.token);
  const isLoggedIn = !!token;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItems = useSelector((state) => state.cartData.cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    dispatch(logout());
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
                Cart <span className="cart-total">{totalItems}</span>
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
