import React from "react";
import ReactDOM from "react-dom";
// @ts-expect-error TS(2307): Cannot find module './App' or its corresponding ty... Remove this comment to see the full error message
import App from "./App";

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
