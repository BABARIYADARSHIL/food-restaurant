import React from "react";
import "./index.css";
import notFoundImage from "../../asset/Image/404.jpg";
const NotFound = () => {
  return (
    <div className="not-found-container">
      <img
        src={notFoundImage}
        alt="404 - Page Not Found"
        className="not-found-image"
      />
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-message">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
