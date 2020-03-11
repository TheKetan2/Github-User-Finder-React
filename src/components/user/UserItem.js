import React, { Component } from "react";

export default class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "id",
      login: "TheKetan2",
      avatar_url: "https://avatars2.githubusercontent.com/u/8502835?s=460&v=4",
      html_url: "https://www.github.com/theketan2"
    };
  }

  render() {
    return (
      <div className="card text-center">
        <img
          src={this.state.avatar_url}
          alt="Avatar"
          className="round-img"
          style={{ backgroundColor: "red", width: "60px" }}
        />
        <h3>{this.state.login}</h3>
        <div>
          <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}
