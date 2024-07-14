import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import Loginbackground from "../../asset/Image/background.jpg";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_USER_DATA } from "../../store/type/Type";
import Input from "../../component/Input";
import { useNavigate } from "react-router-dom";
// import Button from '../component/Button'


const Login = () => {
  const dispatch = useDispatch();

  const Users = useSelector((state) => state.userReducerData.Users);
  console.log("state.userReducerData.Users", Users);
  const Navigate = useNavigate();
  const [UserLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch({ type: FETCH_USER_DATA });
  }, []);

  const CheckUserData = () => {
    const USerCheck = Users.find(
      (user) =>(user.email === UserLogin.email && user.password === UserLogin.password)
      );
      if (USerCheck) {
        const boat = btoa(USerCheck.email + USerCheck.password);
        const token = {
          boat,
          createdAt: new Date().getTime(),
        };
        localStorage.setItem('token', JSON.stringify(token));
        Navigate("/Home");
        console.log("Login is Succssefull",JSON.stringify(token));
    } else {
      console.log("Invalid User");
    }
  };

  const HandelSubmit = (e) => {
    e.preventDefault();
    CheckUserData();
  };

  const HandelChange = (e) => {
    setUserLogin({ ...UserLogin, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <img src={Loginbackground} className="Loginbackground" alt="image" />
      <div className="container">
        <div className="transformed-container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3>Sign In</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span>
                    <i className="fab fa-facebook-square"></i>
                  </span>
                  <span>
                    <i className="fab fa-google-plus-square"></i>
                  </span>
                  <span>
                    <i className="fab fa-twitter-square"></i>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={HandelSubmit}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={UserLogin.email}
                      onChange={HandelChange}
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <Input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      name="password"
                      value={UserLogin.password}
                      onChange={HandelChange}
                    />
                  </div>
                  <div className="row align-items-center remember">
                    <input type="checkbox" />
                    Remember Me
                  </div>
                  <div className="form-group">
                    <Input
                      type="submit"
                      className="btn float-right login_btn"
                      value="Login"
                    />
                    {/* <input
                      type="submit"
                      value="Login"
                      className="btn float-right login_btn"
                    /> */}
                 
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?<a href="#">Sign Up</a>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
/* Made with love by Mutiullah Samim*/
