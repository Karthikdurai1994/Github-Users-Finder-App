import { SET_ALERT, REMOVE_ALERT } from "../constant/types";

// SET ALERT
// Handling Alert if Search bar is empty
const setAlert = (message, type) => (dispatch) => {
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

export default setAlert;
