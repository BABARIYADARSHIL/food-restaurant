import axios from "axios";
import { Restaurant } from "./Api";

export async function  RestaurantData(){
    return await axios.get(Restaurant);
}
