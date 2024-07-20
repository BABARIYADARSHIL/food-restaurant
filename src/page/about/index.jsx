import React from "react";
import "./index.css";
import teamImage from "../../asset/Image/types-of-snack-food.webp"; // Replace with your image path

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <h1 className="about-us-heading">About Us</h1>
        <div className="about-us-content">
          <div className="about-us-text">
            <p>
              Welcome to Snackus, your number one source for delicious and
              convenient food ordering. Our mission is to provide you with a
              seamless and enjoyable food ordering experience, whether you're
              craving a quick bite or planning a grand feast.
            </p>
            <p>
              At Snackus, we are passionate about food and dedicated to bringing
              you the best from local restaurants. We carefully curate our
              restaurant partners to ensure that you have access to high-quality
              meals that satisfy every craving.
            </p>
            <p>
              Our team is committed to delivering exceptional service and
              support. From the moment you place your order to the moment it
              arrives at your doorstep, we strive to make your experience as
              smooth and enjoyable as possible.
            </p>
            <p>
              Thank you for choosing Snackus. We look forward to serving you!
            </p>
          </div>
          <div className="about-us-image">
            <img src={teamImage} alt="Our Team" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
