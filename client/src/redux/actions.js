import serverApi from "../apis/serverApi";

export const selectDate = (date) => {
  return {
    type: "SELECT_DATE",
    payload: date,
  };
};

export const fetchExerciseLogs = (date) => {
  return {
    type: "FETCH_EXERCISE_LOGS",
    payload: [{ e1: "1" }, { e2: "2" }],
  };
};

export const fetchAllExercises = () => async (dispatch) => {
  serverApi
    .get("/get-all-exercises")
    .then((response) => {
      dispatch({
        type: "FETCH_EXERCISES",
        payload: response.data,
      });
    })
    .catch((error) => console.error("error connecting to db " + error));
};
