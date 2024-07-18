import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantData, filterAll, filterRating, filterVeg } from "../../store/restaurantData/Action";
import StarRating from "../../component/StarRation";
import image1 from "../../asset/Image/new1.jpg";
import image2 from "../../asset/Image/new5.jpg";
import image3 from "../../asset/Image/new3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselItem,
} from "mdb-react-ui-kit";


const Home = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
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
      Navigate("/");
    } else {
      dispatch(fetchRestaurantData());
    }
  }, [dispatch, Navigate]);


  const openLocationInMaps = (location) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      location
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div>
        <div className="Main-Home-MAin">
          {/* <div className="Main-Home-MAin-1">
            <MDBCarousel showControls interval={3000}>
              <MDBCarouselItem itemId={1} interval={2000}>
                <img
                  style={{ height: "80vh", width: "100%" }}
                  src={image1}
                  // className="d-block w-100"
                  alt="..."
                />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={2}>
                <img
                  style={{ height: "80vh", width: "100%" }}
                  src={image2}
                  // className="d-block w-100"
                  alt="..."
                />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={3}>
                <img
                  style={{ height: "80vh", width: "100%" }}
                  src={image3}
                  // className="d-block w-100"
                  alt="..."
                />
              </MDBCarouselItem>
            </MDBCarousel>
          </div> */}
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
              {data.map((item) => {
                return (
                  <div
                    className="card-cards"
                    style={{ width: "18rem" }}
                    key={item.id}
                  >
                    <div className="Main-Home-image">
                      <img
                        src={item.image}
                        className="card-img-top Main-Home-image-img "
                        alt="..."
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
                      {/* <span className="material-symbols-outlined">pin_drop</span> */}
                      <Link to={`/restaurant/${item.id}`}>
                        <button className="btn btn-primary">View Items</button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
