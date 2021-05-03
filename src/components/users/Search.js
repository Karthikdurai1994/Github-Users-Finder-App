import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context1/Provider";
import allActions from "../../context1/action";

const Search = () => {
  // useContext for using context API
  const { alertDispatch, githubDispatch, githubState } = useContext(
    GlobalContext
  );
  const {
    allGithubActions: { searchUsers, clearUsers },
    allAlertAction,
  } = allActions;
  // search bar text useState Hook
  const [text, setText] = useState("");
  // Handling User Input Change
  const handleUserInputChange = (e) => {
    setText(e.target.value);
  };
  // Handling Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      allAlertAction("Please Enter something...", "light")(alertDispatch);
    } else {
      searchUsers(text)(githubDispatch);
      setText("");
    }
  };
  // UI
  return (
    // -->Important - in form, if handleFormSubmit is not a arrow function and if it is regular function, then you have to call it as. <form onSubmit={handleFormSubmit.bind(this)}>, because regular function can access class variables or state, so we are binding this to access class varibles and state. If handleFormSubmit is arrow function, we can call like we done now.
    <div>
      <form onSubmit={handleFormSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={handleUserInputChange}
        ></input>
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        ></input>
      </form>
      {githubState.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={() => {
            clearUsers()(githubDispatch);
          }}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
