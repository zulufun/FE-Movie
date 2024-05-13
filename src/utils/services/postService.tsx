import createApiService from "../createApiService";

const api = createApiService();


const get = () => {
  return api.makeRequest({
    url: `/movies`,
    method: "GET",
  });
};

export const postServices = {
  get,
};
