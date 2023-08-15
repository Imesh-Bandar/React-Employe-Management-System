import React from "react";
import Login from "./Components/Login";
import './App.css';

function App() {
  return (
    <>
      <div className="NavBar ">
        <nav class="navbar navbar-light bg-primary  ">
          <a class="navbar-brand p-2" href="#">Employ Management System</a>

        </nav>
        <Login />
        <div>

        </div>
      </div>
    </>
  );
}

export default App
