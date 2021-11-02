import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
const AuthGaurd = ({ children }) => {
  const permission = true;
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (!permission) {
      history.push("/");
    }
    console.log(location);
  }, [location.pathname]);
  return children;
};

export default AuthGaurd;
