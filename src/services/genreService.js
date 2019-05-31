import http from "./httpService";
import { apiUrl } from "../config.json";

export function getGenres() {
  console.log(apiUrl);
  return http.get(apiUrl + "/genres");
}
