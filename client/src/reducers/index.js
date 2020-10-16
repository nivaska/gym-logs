import { combineReducers } from "redux";
import exerciseLogsReducer from "./exerciseLogsReducer";
import selectedDateReducer from "./selectedDateReducer";

export default combineReducers({
  selectedDate: selectedDateReducer,
  exerciseLogs: exerciseLogsReducer,
});
