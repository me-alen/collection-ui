import httpService from "./httpService";
import { environment } from "../../environments/environment_default";
import { Endpoints } from "../core/constants/endpoints";

async function login(username, password) {
  const endpoint = environment.baseUrl + Endpoints.LOGIN_USER;
  const data = await httpService.post(endpoint, { username, password });
  return data.data;
}

export default { login };
