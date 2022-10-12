import md5 from "md5";
import api from "./api";

const ts = 1;
const apikey = "8d7e60f2770d01565b53d2344c7556be";

const getData = (endpoint, offset, privateKey = "d8a5a0870bfbd36aa551463c3bb67fd2d0cb6c24") => {
  const hash = md5(ts + privateKey + apikey);

  return api
    .get(endpoint, { params: { ts, apikey, hash, offset } })
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
};

export { getData };
