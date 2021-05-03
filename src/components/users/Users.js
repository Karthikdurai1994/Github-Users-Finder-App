import React, { useContext } from "react";
import { GlobalContext } from "../../context1/Provider";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const Users = () => {
  // getting github context
  const { githubState } = useContext(GlobalContext);
  const { loading, users } = githubState;
  console.log(loading, users);
  // UI
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user, index) => {
          return <UserItem key={index} user={user}></UserItem>;
        })}
      </div>
    );
  }
};

// user style
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
