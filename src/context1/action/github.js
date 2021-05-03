import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../constant/types";
import axios from "axios";

let githubClientId;
let githubClientSecret;
if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_SECRET_ID;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_SECRET_ID;
}

// Search Users (Search Github Users API  Function)
const searchUsers = (userName) => async (dispatch) => {
  setLoading(dispatch);
  const res = await axios.get(
    `https://api.github.com/search/users?q=${userName}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  );
  dispatch({
    type: SEARCH_USERS,
    payload: res.data.items,
  });
};

// Get Users(Get Single Github User Data API)
const getSingleUserData = (username) => async (dispatch) => {
  setLoading(dispatch);
  const res = await axios.get(
    `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
  );
  dispatch({
    type: GET_USER,
    payload: res.data,
  });
};

// Get Repos(Get Users Repository API)
const getSingleUserRepo = (username) => async (dispatch) => {
  setLoading(dispatch);
  const res = await axios.get(
    `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  );
  dispatch({
    type: GET_REPOS,
    payload: res.data,
  });
};

// Clear Users(Clearing User when we click clear button in Search Component)
const clearUsers = () => (dispatch) => {
  dispatch({
    type: CLEAR_USERS,
  });
};
// Set Loading
const setLoading = (dispatch) => {
  dispatch({ type: SET_LOADING });
};

// All github actions is created as single object
const allGithubActions = {
  searchUsers,
  getSingleUserData,
  getSingleUserRepo,
  clearUsers,
  setLoading,
};

export default allGithubActions;
