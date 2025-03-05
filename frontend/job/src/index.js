import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import JobPosting from "./pages/JobPosting";  // ✅ Correct path
import JobSearch from "./pages/JobSearch";    // ✅ Correct path

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
