import React, { useContext } from "react";
import { GlobalContext } from "../../context1/Provider";

const Alert = () => {
  // Setting up Alert Context API
  const {
    alertState: { alert },
  } = useContext(GlobalContext);
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i> &nbsp;
        {alert.message}
      </div>
    )
  );
};

export default Alert;
