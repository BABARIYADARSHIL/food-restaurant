import axios from "axios";
import { UserData } from "./Api";

export function UsersData(){
    return axios.get(UserData);
}
