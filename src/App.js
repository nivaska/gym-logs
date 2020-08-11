import React from "react";
import DisplayGrid from "./components/DisplayGrid";
import DatePicker from "./components/DatePicker";

export default () => {
  return (
    <div>
      <h1>Gym Logger</h1>
      <DatePicker />
      <DisplayGrid />
    </div>
  );
};
