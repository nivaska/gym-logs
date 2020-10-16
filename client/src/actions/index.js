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
