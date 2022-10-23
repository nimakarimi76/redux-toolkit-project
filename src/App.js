import "./App.css";
import React from "react";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <h1>React using redux toolkit</h1>
      <Profile />
      <Login />
    </div>
  );
}

export default App;
