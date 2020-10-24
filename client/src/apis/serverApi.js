import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export const addNewLog = (log) => {
  const { date, exerciseId, weight1, count1 } = log;

  return axiosInstance.post("/add-log", {
    date,
    exerciseId,
    weight1,
    count1,
  });
};

export default axiosInstance;
