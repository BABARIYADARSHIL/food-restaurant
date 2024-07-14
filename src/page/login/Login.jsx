import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import Loginbackground from "../../asset/Image/background.jpg";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../component/Input";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../store/loginUserData/Action";

const Login = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state) => state.userReducerData);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ email, password }));
    const token = {
      value: btoa(`${email}:${password}`),
      createdAt: new Date().getTime(),
    };
    localStorage.setItem("jwtToken", JSON.stringify(token));
    Navigate("/Home");
  };
  // const users = useSelector((state) => state.userReducerData.users);
  // console.log("state.userReducerData.Users", users);
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
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />
                  Remember Me
                </div>
                <div className="form-group">
                  <button onClick={handleLogin} disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </button>
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
