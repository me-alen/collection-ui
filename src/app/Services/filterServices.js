import httpService from "./httpService";
import { environment } from "../../environments/environment_default";
import { Endpoints } from "../core/constants/endpoints";

async function mlFilteringDataTable(params) {
  const endpoint = environment.baseUrl + Endpoints.ML_FILTERING;
  const data = await httpService.get(endpoint, {
    params: params,
  });
  return data.data;
}

async function buttonFilterData() {
  const endpoint = environment.baseUrl + Endpoints.COLLECTION_RISK_FILTER;
  const data = await httpService.get(endpoint);
  return data.data;
}

async function dropDownFilterData() {
  const endpoint = environment.baseUrl + Endpoints.DROP_DOWN_FILTER;
  const data = await httpService.get(endpoint);
  return data.data;
}

export default { mlFilteringDataTable, buttonFilterData, dropDownFilterData };
