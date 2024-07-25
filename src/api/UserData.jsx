import axios from "axios";
import { User } from "./Api";

export function UsersData(email, password) {
  const responese = axios.post(User, { email, password });
  return responese;
}
