import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating }) => {
  const stars = [];
  const totalStars = 5;

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<FontAwesomeIcon icon={solidStar} key={i} />);
    } else {
      stars.push(<FontAwesomeIcon icon={regularStar} key={i} />);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
