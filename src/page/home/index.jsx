import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css"; // Ensure correct import path
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurantData,
  filterAll,
  filterRating,
  filterVeg,
} from "../../store/restaurantData/Action";
import StarRating from "../../component/StarRation";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../slider";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.restaurantReducerData.FilteredData);
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
      navigate("/");
    } else {
      dispatch(fetchRestaurantData());
    }
  }, [dispatch, navigate]);

  const openLocationInMaps = (location) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      location
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="Main-Home-MAin">
        <Slider />
      </div>
      <div className="Main-Home">
        <div className="Main-Home-center">
          <div className="Main-Home-Left">
            <div className="Main-Home-Left-Content">
              <div onClick={() => dispatch(filterAll())}>ALL</div>
              <div onClick={() => dispatch(filterRating())}>Rating</div>
              <div onClick={() => dispatch(filterVeg())}>Veg</div>
            </div>
          </div>
          <div className="Main-Home-Rigth">
            {data.map((item) => (
              <div className="card-cards" key={item.id}>
                <div className="Main-Home-image">
                  <img
                    src={item.image}
                    className="card-img-top Main-Home-image-img"
                    alt={item.restaurantName}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.restaurantName}</h5>
                  <h5 className="card-title">{item.foodType}</h5>
                  <p className="card-text">
                    Location:
                    <span
                      className="location-link"
                      onClick={() => openLocationInMaps(item.location)}
                    >
                      {item.location}
                    </span>
                  </p>
                  <p className="star-rating">
                    Rating:
                    <StarRating rating={item.rating} />
                  </p>
                  <p className="card-text">
                    Categories: {item.categories.join(", ")}
                  </p>
                  <Link to={`/restaurant/${item.id}`}>
                    <button className="btn btn-primary">View Items</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
