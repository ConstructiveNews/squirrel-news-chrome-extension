// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // StrictMode is disabled to prevent duplicated calls to Firebase.
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
);
