import "./App.css";
import React from "react";
import Profile from "./components/user/Profile";
import Login from "./components/user/Login";
import ChangeTheme from "./components/user/ChangeTheme";

function App() {
  return (
    <div className="App">
      <h1>React using redux toolkit</h1>
      <Profile />
      <Login />
      <ChangeTheme />
    </div>
  );
}

export default App;
