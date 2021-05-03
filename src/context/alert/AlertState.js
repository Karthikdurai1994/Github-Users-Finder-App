import React, { useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT } from "../types";
import AlertReducer from "./alertReducer";
import AlertContext from "./alertContext";

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // SET ALERT
  // Handling Alert if Search bar is empty
  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { message, type },
    });
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
      });
    }, 2000);
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
