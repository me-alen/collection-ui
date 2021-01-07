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


//Delinquency dropdown

export function getDelinquency() {
  return http.get(`${apiUrl}/list/bucket`)
}

//Cycle dropdown

export function getCycle() {
  return http.get(`${apiUrl}/list/cycle`)
}

//Customer Type dropdown

export function getCustomerType() {
  return http.get(`${apiUrl}/list/customer-type`)
}

//Region dropdown

export function getRegion() {
  return http.get(`${apiUrl}/list/region`)
}

//Branch dropdown

export function getBranch() {
  return http.get(`${apiUrl}/list/branches`)
}

//City dropdown

export function getCity() {
  return http.get(`${apiUrl}/list/city`)
}

//Collection Category dropdown

export function getCollectionCategory() {
  return http.get(`${apiUrl}/list/collection-category`)
}

//Employment Sector dropdown

export function getEmploymentSector() {
  return http.get(`${apiUrl}/list/employment-sector`)
}

//Payment Flag dropdown

export function getPaymentFlag() {
  return http.get(`${apiUrl}/list/payment-flag`)
}

//Product dropdown

export function getProduct() {
  return http.get(`${apiUrl}/list/product`)
}

//States dropdown

export function getStates() {
  return http.get(`${apiUrl}/list/state`)
}


export default {
  getProbToDefault,
  getCaseAction,
  getPaymentFlagType,
  getDelinquency,
  getCycle,
  getCustomerType,
  getRegion,
  getBranch,
  getCity,
  getCollectionCategory,
  getEmploymentSector,
  getPaymentFlag,
  getProduct,
  getStates
};