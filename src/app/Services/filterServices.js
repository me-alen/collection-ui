import httpService from "./httpService";
import { environment } from "../../environments/environment_default";
import { Endpoints } from "../core/constants/endpoints";

async function mlFiltering() {
  const endpoint = environment.baseUrl + Endpoints.ML_FILTERING;
  const data = await httpService.get(endpoint);
  return data.data;
}

export default { mlFiltering };
