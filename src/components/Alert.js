// @flow
import React, { useContext } from "react";
import AlertContext from "../context/alertContext";

export default () => {
  const {show, hide, alert } = useContext(AlertContext);
  if (!alert.visible) {
    return null;
  }
  return (
    <div
      className={`alert alert-${alert.type || "warning"} alert-dismissible`}
    >
      <strong>Holy guacamole!</strong> {alert.text}
      <button type="button" className="close" aria-label="Close" onClick={hide}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
