import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import CartImage from "../../asset/Image/neelkanth-restaurant-omkareshwar-omkareshwar-h-o-omkareshwar-2r00x7gxgg.avif";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_RESTAURANT_DATA } from "../../store/type/Type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined";

const Home = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const data = useSelector(
    (state) => state.restaurantReducerData.RestaurantData
  );
  console.log("===data", data);

  const isAuthenticated = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token && token.createdAt) {
      const currentTime = new Date().getTime();
      const expireTime = 3600000;
      if (currentTime - token.createdAt > expireTime) {
        localStorage.removeItem("token");
        return false;
      }
      return true;
    }
    return false;
  };

  useEffect(() => {
    dispatch({ type: FETCH_RESTAURANT_DATA });
    const timer = setTimeout(() => {
      if (!isAuthenticated()) {
        Navigate("/");
      }
    }, 60000);

    return () => clearTimeout(timer);
  }, [Navigate]);

  return (
    <div className="Main-Home">
      <div className="Main-Home-center">
        <div className="Main-Home-Left">
          <div className="Main-Home-Left-Content">
            <div>ALL</div>
            <div>Rating</div>
            <div>Veg</div>
          </div>
        </div>
        <div className="Main-Home-Rigth">
          {data.map((item) => {
            return(
            <div className="card cards" style={{ width: "18rem" }}>
              <img
                className="card-img-top Main-Home-image"
                src={CartImage}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{item.foodType}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span className="material-symbols-outlined">pin_drop</span>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
