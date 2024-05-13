import axios from "axios";
// import https from "https";
// import https from "https";
import { serverConfig } from "../const";
import Auth from "./auth";
function getAuthToken() {
  return window.localStorage.getItem("token") ?? "";
}
 
var { server } = serverConfig; 
const _makeRequest = (instantAxios: any) => async (args: any) => { 
  const _headers = args.headers ? args.headers : {}; 
  const body = args.body ? args.body : {}; 
  const defaultHeaders = {}; 
  args = { 
    ...args, 
    headers: { 
      ...defaultHeaders, 
      ..._headers, 
    },
    body,
  };

  const request = instantAxios(args);

  return request
    .then((response: any) => response.data)
    .catch((error: any) => {
      throw error.response.data ? error.response.data : error.response;
    });
};

const _makeAuthRequest = (instantAxios: any) => async (args: any) => {
  const requestHeaders = args.headers ? args.headers : {};
  let token = localStorage.getItem("token");
  let refreshToken = localStorage.getItem("refreshToken");
  let client_id = localStorage.getItem("client_id");

  let headers = {
    Authorization: `Bearer ${token}`,
    ClientID: client_id,
  };
  instantAxios.interceptors.response.use(
    (response: any) => response,
    async (error: any) => {
      const status = error.response ? error.response.status : null;
      const originalConfig = error.config;
      // Access Token was expired
      if (status === 401) {
        return Auth.refreshToken(token, refreshToken).then((res) => {
          error.config.headers["Authorization"] = "Bearer " + getAuthToken();
          return instantAxios(error.config);
        });
      }
      return Promise.reject(error);
    }
  );

  args = {
    ...args,
    headers: {
      ...requestHeaders,
      ...headers,
    },
  };

  const request = instantAxios(args);

  return request
    .then((response: any) => response.data)
    .catch((error: any) => {
      throw error.response;
      //throw error.response.data ? error.response.data : error.response;
    });
};

const makeRequest = (options: any = {}) => {
  let BaseURL = server;

  if (options.BaseURL) BaseURL = options.BaseURL;

  //const baseUrlValidated = options.baseUrl || getEnv('baseAPIUrl')
  const instance = axios.create({
    // httpsAgent: new https.Agent({
    //   rejectUnauthorized: false,
    // }),
    baseURL: BaseURL,
    timeout: 1000000, //30000,
  });

  return {
    makeRequest: _makeRequest(instance),
    makeAuthRequest: _makeAuthRequest(instance),
  };
};

export default makeRequest;
