import React, { createContext, useReducer } from "react";
import allInitials from "./initialState";
import allReducers from "./reducers";

// Creating Global Context
export const GlobalContext = createContext();

const GlobalProvider = (props) => {
  const { alertInitial, githubInitial } = allInitials;
  const { alertReducer, githubReducer } = allReducers;
  // useReducer Hook for alert
  const [alertState, alertDispatch] = useReducer(alertReducer, alertInitial);
  // useReducer Hook for github
  const [githubState, githubDispatch] = useReducer(
    githubReducer,
    githubInitial
  );

  return (
    <GlobalContext.Provider
      value={{
        alertState,
        alertDispatch,
        githubState,
        githubDispatch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
