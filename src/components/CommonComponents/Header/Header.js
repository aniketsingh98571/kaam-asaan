import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import UserName from "../../PopUps/UserName/UserName";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../CustomHook/Firebase";
import MetaMaskConnection from "../../CustomHook/MetaMaskConnection";
import {HOME,ALL_SCHEMES,LEARN,ABOUT} from '../../../URL'
export default function Header() {
  const [active, setActive] = useState("Home");
  const [showUsername, setShowUsername] = useState(false);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const login = sessionStorage.getItem("login");
    console.log(login);
    MetaMaskConnection("check").then(function (ethData) {
      if (ethData && login) {
        setLogin(true);
      }
    });
  }, []);
  const connectMetaMask = () => {
    MetaMaskConnection("connect").then(async function (ethData) {
      let boolf = false;
      let username;
      await getDocs(collection(db, "users")).then((querySnapshot) => {
        querySnapshot.docs.map((data) => {
          const wallet = data.data();
          if (wallet.walletId === ethData.account){ 
          boolf = true;
          username = wallet.username;
          console.log(username)
          }
        });
      });
      console.log(boolf);
      if (boolf) {
        sessionStorage.setItem("login", true);
        sessionStorage.setItem("username", username);
        window.location.reload()
        setLogin(true);
      } else {
        setShowUsername(true);
      }
    });
  };
  const registerUser = async (ethData, username) => {
    console.log(ethData, username);
    const updatedUsername = username + ethData.substr(ethData.length - 4);
    const response = await addDoc(collection(db, "users"), {
      username: updatedUsername,
      walletId: ethData,
    });
    if (response.id) {
      console.log("data saved");
      setShowUsername(false);
      sessionStorage.setItem("login", true);
      sessionStorage.setItem("username", updatedUsername);
      setLogin(true);
    } else {
      console.log("Data not saved");
      alert("Something went wrong");
    }
  };
  return (
    <div className={classes.OuterContainer}>
      {showUsername ? <UserName registerUser={registerUser} /> : null}
      <div className={classes.InnerContainer}>
        <div className={classes.FlexContainer}>
          <div className={classes.LeftContainer}>
           <a href={HOME}> 
           <div className={classes.LogoContainer}>
              <img src={logo} alt="kaam asaan" />
            </div>
            </a>
          </div>
          <div className={classes.RightContainer}>
            <div className={classes.ListContainer}>
              <Link className={classes.Link} to={HOME}>
                <li
                  onClick={() => setActive("Home")}
                  className={
                    active === "Home" ? classes.Active : classes.Inactive
                  }
                >
                  Home
                </li>
              </Link>
              <Link className={classes.Link} to={ALL_SCHEMES}>
                <li
                  onClick={() => setActive("AllSchemes")}
                  className={
                    active === "AllSchemes" ||
                    window.location.pathname ==={ALL_SCHEMES}
                      ? classes.Active
                      : classes.Inactive
                  }
                >
                  Schemes
                </li>
              </Link>
              <a className={classes.Link} href="mailto: abc@example.com">
                {" "}
                <li
                  className={
                    active === "Support" ? classes.Active : classes.Inactive
                  }
                >
                  Support
                </li>
              </a>
              <Link className={classes.Link} to={LEARN}>
                {" "}
                <li
                  className={
                    active === "Learn" ? classes.Active : classes.Inactive
                  }
                  onClick={() => setActive("Learn")}
                >
                  Learn
                </li>
              </Link>
              <Link className={classes.Link} to={ABOUT}>
                <li
                  className={
                    active === "About" ? classes.Active : classes.Inactive
                  }
                  onClick={() => setActive("About")}
                >
                  About Us
                </li>
              </Link>
            </div>
            {!login ? (
              <div
                className={classes.ConnectMetamask}
                onClick={connectMetaMask}
              >
                <button type="button">Connect Metamask</button>
              </div>
            ) : (
              <div
                className={[classes.ConnectMetamask, classes.Connected].join(
                  " "
                )}
                onClick={connectMetaMask}
              >
                <Link to="/profile">
                  <button type="button">
                    {sessionStorage.getItem("username")}
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
