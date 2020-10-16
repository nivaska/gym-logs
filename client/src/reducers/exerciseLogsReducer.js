export default (exerciseLogs = [], action) => {
  switch (action.type) {
    case "FETCH_EXERCISE_LOGS":
      return action.payload;
    default:
      return exerciseLogs;
  }
};
