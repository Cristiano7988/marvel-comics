import md5 from "md5";
import api from "./api";

const ts = 1;
const apikey = "8d7e60f2770d01565b53d2344c7556be";
const privateKey = "";
const hash = md5(ts + privateKey + apikey);

const getData = (endpoint) =>
  api
    .get(endpoint, { params: { ts, apikey, hash } })
    .then((response) => {
      if (response.status !== 200) return;
      const { data } = response;

      if (data.code !== 200) return;
      const { results } = data.data;

      return { data, results, message: false };
    })
    .catch((error) => ({
      data: false,
      results: false,
      message: error.message,
    }));

export { getData };
