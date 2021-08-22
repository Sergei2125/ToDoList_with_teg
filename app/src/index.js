import React from "react";
import ReactDOM from "react-dom";
import "./static/index.css";
import ToDoListContainer from "./ToDoList/containers/ToDoListContainer";

ReactDOM.render(
  <React.StrictMode>
    <ToDoListContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
