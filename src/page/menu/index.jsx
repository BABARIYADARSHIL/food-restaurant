import React from "react";
import image1 from "../../asset/Image/pexels-chanwalrus-958545.jpg";
import image2 from "../../asset/Image/istockphoto-1316145932-612x612.jpg";
import image3 from "../../asset/Image/imag3.jpg";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Menu() {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem itemId={1}>
        <img
          src={image1}
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img
          src={image2}
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img
          src={image3}
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
