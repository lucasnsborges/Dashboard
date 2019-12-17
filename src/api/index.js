import axios from "axios";
import { api_url, access_token } from "../utils/config";

async function login(form) {
  try {
    const { data } = await axios
      .post(`${api_url}/auth`, { access_token }, {
        auth: {
          username: form.email,
          password: form.password
        }
      });
    return data;
  }
  catch (error) {
    return error;
  }
}

async function createUser(form) {
  try {
    const { data } = await axios
      .post(`${api_url}/users`, {
        ...form,
        access_token
      });
    return data;
  }
  catch (error) {
    return error;
  }
}

export default {
  login,
  createUser
};
