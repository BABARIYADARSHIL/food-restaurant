import axios from "axios";
import { Restaurant } from "./Api";

export function RestaurantData(){
    return axios.get(Restaurant);
}
