import axios from "axios";
import { BASE_URL } from "./environmnet";

axios.interceptors.response.use((response) => response.data);

function networkService() {
  const baseUrl = BASE_URL;

  function* postData(action, body) {
    //This is for call endpoint for save json
    const url = baseUrl + action;
    return yield axios.post(url, body);
  }

  function* getData(action, params) {
    const url = baseUrl + action;
    const config = {
      params,
      headers: {
        Authorization:
          "Bearer " +
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE3MSwiZXhwIjoxNjM5NDY2NjE1fQ.9vE-glLQtV2NT3gNMkqeRkrWWZAhYCqX-_ibs7lC8GY",
      },
    };
    return yield axios.get(url, config);
  }

  function* putData(action, body) {
    const url = baseUrl + action;
    return yield axios.put(url, body);
  }

  function* deleteData(action, params) {
    const url = baseUrl + action;
    const config = { params };

    return yield axios.delete(url, config);
  }

  return {
    postData,
    putData,
    getData,
    deleteData,
  };
}

const network = networkService();
export default network;
