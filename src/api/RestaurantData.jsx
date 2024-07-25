import axios from "axios";
import { Restaurant } from "./Api";

export const RestaurantData = () => {
  const token = localStorage.getItem("jwtToken");
  return axios.get(Restaurant, {
    headers: {
      token: `${token}`,
    },
  });
};
