import "./App.css";
import React from "react";
// import Profile from "./components/user/Profile";
// import Login from "./components/user/Login";
// import ChangeTheme from "./components/user/ChangeTheme";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      <h2>React using redux toolkit</h2>
      {/* <Profile />
      <Login />
      <ChangeTheme /> */}
      <Counter />
    </div>
  );
}

export default App;
