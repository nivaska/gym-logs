import { combineReducers } from "redux";

const exercisesReducer = (exercises = [], action) => {
  switch (action.type) {
    case "FETCH_EXERCISES":
      return action.payload;
    default:
      return exercises;
  }
};

const exerciseLogsReducer = (exerciseLogs = [], action) => {
  switch (action.type) {
    case "FETCH_EXERCISE_LOGS":
      return action.payload;
    default:
      return exerciseLogs;
  }
};

const selectedDateReducer = (date = new Date(), action) => {
  switch (action.type) {
    case "SELECT_DATE":
      return action.payload;
    default:
      return date;
  }
};

export default combineReducers({
  selectedDate: selectedDateReducer,
  exerciseLogs: exerciseLogsReducer,
  exercises: exercisesReducer,
});
