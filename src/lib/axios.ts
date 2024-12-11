import axios from "axios";
import moment from "moment";

const BASE_DB_URL = process.env.NEXT_PUBLIC_DATABASE_URL;
const BASE_AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;


const dateTransformer:any = (data:any) => {
  if (data instanceof Date) {
    // return moment(data).format('YYYY-MM-DDTHH:mm:ss') + '.000Z';
    return moment(data).format('YYYY-MM-DDTHH:mm:ss');
  }
  if (Array.isArray(data)) {
    return data.map(val => dateTransformer(val));
  }
  if (typeof data === "object" && data !== null) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        data[key] = dateTransformer(data[key]);
      }
    }
  }
  return data;
};

// Add a request interceptor for date transformation
axios.interceptors.request.use(
  config => {
    if (config.data) {
      config.data = dateTransformer(config.data);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Configure baseURL and headers
axios.defaults.baseURL = BASE_DB_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

export default axios;

// export default axios.create({
//   baseURL: BASE_DB_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const axiosAuth = axios.create({
  baseURL: BASE_AUTH_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
