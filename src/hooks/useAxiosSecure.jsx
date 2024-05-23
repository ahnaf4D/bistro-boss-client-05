import axios from 'axios';
// axios instance
const axiosSecure = axios.create({
  baseURL: `http://localhost:3000`,
});
const useAxiosSecure = () => {
  return axiosSecure;
};
export default useAxiosSecure;
