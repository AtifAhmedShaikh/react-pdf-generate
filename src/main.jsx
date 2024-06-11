import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyApp from "./MyApp.jsx";
import MyApp2 from "./MyApp2.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyApp /> */}
    <MyApp2 />
  </React.StrictMode>
);
