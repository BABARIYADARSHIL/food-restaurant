import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <footer className="custom-footer">
        <div className="custom-container">
          <div className="custom-row">
            <div className="custom-col-md-4 custom-col-sm-12">
              <h5>About Us</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="custom-col-md-4 custom-col-sm-12">
              <h5>Contact Us</h5>
              <ul className="custom-list-unstyled">
                <li>Phone: +123456789</li>
                <li>Email: info@example.com</li>
                <li>Address: 123, Street Name, City</li>
              </ul>
            </div>
            <div className="custom-col-md-4 custom-col-sm-12">
              <h5>Follow Us</h5>
              <ul className="custom-list-unstyled">
                <li>
                  <Link href="#">Facebook</Link>
                </li>
                <li>
                  <Link href="#">Twitter</Link>
                </li>
                <li>
                  <Link href="#">Instagram</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="custom-footer-bottom">
          <div className="custom-container">
            <div className="custom-row">
              <div className="custom-col">
                <p className="custom-text-center">
                  &copy; 2024 Yummy Tummy. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
