import React from "react";
import "./App.css";

import Navbar from "./components/layout/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar title={"Github Profile Finder"} />
        <h1>Hello from react!</h1>
      </div>
    );
  }
}

export default App;
