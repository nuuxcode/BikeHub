import axios from "axios";

let BACKEND_URL;
if (import.meta.env.VITE_MODE === 'prod') {
  BACKEND_URL = import.meta.env.VITE_BACK_END_PROD;
}
if (import.meta.env.VITE_MODE === 'dev') {
  BACKEND_URL = import.meta.env.VITE_BACK_END_DEV;
}
if (import.meta.env.VITE_MODE === 'local') {
  BACKEND_URL = import.meta.env.VITE_BACK_END_LOCAL;
}
export default axios.create({
  baseURL: BACKEND_URL,
});
