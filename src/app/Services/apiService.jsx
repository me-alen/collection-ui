import axios from "axios";
import { apiUrl } from "../../config.json";

// const apiEndpoint = apiUrl;

const getProbToDefault = async () => {
    return await axios
      .get(apiUrl)
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  };

  export { getProbToDefault };

  export default {
    getProbToDefault
  };