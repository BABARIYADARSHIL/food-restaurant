import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import CartImage from "../../asset/Image/neelkanth-restaurant-omkareshwar-omkareshwar-h-o-omkareshwar-2r00x7gxgg.avif";
import { useDispatch, useSelector } from "react-redux";
// import { FETCH_RESTAURANT_DATA } from "../../store/type/Type";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { fetchRestaurantData } from "../../store/restaurantData/Action";
// import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined";

const Home = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const data = useSelector(
    (state) => state.restaurantReducerData.RestaurantData
  );
  console.log("===Home", data);

  const isAuthenticated = () => {
    const tokenString = localStorage.getItem("jwtToken");
    if (tokenString) {
      try {
        const token = JSON.parse(tokenString);
        if (token && token.createdAt) {
          const currentTime = new Date().getTime();
          const expireTime = 3600000; // 1 hour
          if (currentTime - token.createdAt > expireTime) {
            localStorage.removeItem("jwtToken");
            return false;
          }
          return true;
        }
      } catch (e) {
        console.error("Error parsing token", e);
        localStorage.removeItem("jwtToken");
        return false;
      }
    }
    return false;
  };

  useEffect(() => {
    if (!isAuthenticated()) {
      Navigate("/");
    } else {
      dispatch(fetchRestaurantData());
    }
  }, [dispatch, Navigate]);

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
            return (
              <div
                className="card cards"
                style={{ width: "18rem" }}
                key={item.id}
              >
                <img
                  className="card-img-top Main-Home-image"
                  src={CartImage}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.restaurantName}</h5>
                  <h5 className="card-title">{item.foodType}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <span className="material-symbols-outlined">pin_drop</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
