import axios from "axios";
import { apiUrl } from "../../config.json";
import http from "./httpService";

//vertical chart

export function getProbToDefault() {
  return http.get(`${apiUrl}/ml-category-count`);
}


//pie chart

export function getCaseAction() {
  return http.get(`${apiUrl}/ml-case-action`);
}


//donut chart

export function getPaymentFlagType() {
  return http.get(`${apiUrl}/ml-payment-flag-type`);
}

// diff way to write the fn

// const getPaymentFlagType = async () => {
//   return await axios
//   .get(`${apiUrl}/ml-payment-flag-type`)
//   .then(response => {
//     console.log('donut res on api page', response);
//     // return response.data;
//     return response;
//   }).catch(error => {
//     console.log(error);
//   });
// }
 
// export { getPaymentFlagType };

export default {
  getProbToDefault,
  getCaseAction,
  getPaymentFlagType
};