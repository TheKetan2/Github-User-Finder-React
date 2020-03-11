import React from "react";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar title={"Github Profile Finder"} />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
