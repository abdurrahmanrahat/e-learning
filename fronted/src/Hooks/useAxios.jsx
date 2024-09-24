import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-learning-backed.vercel.app/api/v1",
});

const useAxios = () => {
  return instance;
};

export default useAxios;
