import axios from "axios";
import { apiUrl } from "../../config.json";
import http from "./httpService";

// const apiEndpoint = apiUrl;

//vertical chart

// const getProbToDefault = async () => {
//     return await axios
//       .get(`${apiUrl}/ml-category-count`)
//       .then(response => {
//         console.log(response);
//         return response.data;
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   export { getProbToDefault };


export function getProbToDefault() {
  return http.get(`${apiUrl}/ml-category-count`);
}


//pie chart

// const getCaseAction = async () => {
//   return await axios
//   .get(`${apiUrl}/ml-case-action`)
//   .then(response => {
//     console.log(response);
//     return response.data;
//   }).catch(error => {
//     console.log(error);
//   });
// }
 
// export { getCaseAction };


export function getCaseAction() {
  return http.get(`${apiUrl}/ml-case-action`);
}


//donut chart

const getPaymentFlagType = async () => {
  return await axios
  .get(`${apiUrl}/ml-payment-flag-type`)
  .then(response => {
    console.log('donut res on api page', response);
    // return response.data;
    return response;
  }).catch(error => {
    console.log(error);
  });
}
 
export { getPaymentFlagType };


// export function getPaymentFlagType() {
//   return http.get(`${apiUrl}/ml-payment-flag-type`);
// }


export default {
  getProbToDefault,
  getCaseAction,
  getPaymentFlagType
};