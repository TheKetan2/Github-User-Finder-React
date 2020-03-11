import React, { Component } from "react";
import UserItem from "./UserItem";

export class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "TheKetan2",
        avatar_url:
          "https://avatars2.githubusercontent.com/u/8502835?s=460&v=4",
        html_url: "https://www.github.com/theketan2"
      },
      {
        id: "2",
        login: "TheKetan2",
        avatar_url:
          "https://avatars2.githubusercontent.com/u/8502835?s=460&v=4",
        html_url: "https://www.github.com/theketan2"
      },
      {
        id: "3",
        login: "TheKetan2",
        avatar_url:
          "https://avatars2.githubusercontent.com/u/8502835?s=460&v=4",
        html_url: "https://www.github.com/theketan2"
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
