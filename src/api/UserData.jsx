import axios from "axios";
import { UserData } from "./Api";

export function UsersData(credentials) {
  return axios.get(UserData, credentials);
}
