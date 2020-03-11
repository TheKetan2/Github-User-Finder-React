import React from "react";
import axios from "axios";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";

class App extends React.Component {
  state = {
    users: [],
    loading: false
  };

  componentDidMount = async () => {
    this.setState({ loading: true });

    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);

    this.setState({
      users: res.data,
      loading: false
    });
  };

  render() {
    return (
      <div>
        <Navbar title={"Github Profile Finder"} />
        <div className="container">
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
