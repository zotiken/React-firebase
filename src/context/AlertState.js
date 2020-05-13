import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import { alertReducer, SHOW_ALERT, HIDE_ALERT } from "../context/alertReducer";

export default ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { visible: false });

  const show = (param) => {
    dispatch({ type: SHOW_ALERT, param });
  };
  const hide = (param) => {
    console.log("object");
    dispatch({ type: HIDE_ALERT, param });
  };

  return (
    <AlertContext.Provider value={{ show, hide, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};
