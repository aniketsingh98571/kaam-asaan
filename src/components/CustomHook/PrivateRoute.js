import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { HOME, RESTRICTED_URLS } from "../../URL";
import MetaMaskConnection from "./MetaMaskConnection";
import { Outlet,Navigate } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [allow, setAllow] = useState(null);
  const [restriced, setRestriced] = useState(null);
  useEffect(() => {
    checkMetaMaskConnection()
  }, []);
  const checkMetaMaskConnection = async () => {
    const login = sessionStorage.getItem("login");
    const adminCheck=sessionStorage.getItem("admin")
    const connection = await MetaMaskConnection("check");
  
    if ((connection && login)||adminCheck) {
      setAllow(true);
    } else {
      setAllow(false);
    }
    let checkURL = rest.location.pathname;

    if (!RESTRICTED_URLS.includes(checkURL)) {
      setRestriced(false);
    } else {
      setRestriced(true);
    }
  };
  const callURL = () => {
    console.log(restriced, allow, window.location.pathname, "IN PrivateRoute");
    window.location.href = HOME;
  };
  return (
    <>
      {allow !== null ? (
        <Route
          {...rest}
          render={(props) =>
            restriced ? (
              allow ? (
                <Component {...props} />
              ) : (
                callURL()
              )
            ) : (
              <Component {...props} />
            )
          }
        />
      ) : null}
    </>
  );
};
export default PrivateRoute;