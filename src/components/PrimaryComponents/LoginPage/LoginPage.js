import React, { useState } from "react";
import classes from "./LoginPage.module.css";
import government from "../../../assets/images/government.png";
import ethereum from "../../../assets/images/ethereum.png";
import dodgecoin from "../../../assets/images/dodgecoin.png";
import logo from "../../../assets/images/logo.png";
import { Link} from "react-router-dom";
import { ADMIN } from "../../../URL";
export default function LoginPage() {
  const [credentials,setCredentials]=useState({
    id:null,
    password:null
  })
  const inputHandler=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setCredentials({...credentials,[name]:value})
  }
  const checkLogin=()=>{
    if(credentials.id===process.env.REACT_APP_LOGIN_ID&&credentials.password===process.env.REACT_APP_PASSWORD){
      window.location.href=ADMIN
    }
    else{
      alert("Wrong Credentials")
    }
  }
  return (
    <div className={classes.OuterContainer}>
      <div className={classes.InnerContainer}>
        <div className={classes.MainContainer}>
          <div className={classes.MainLoginSection}>
            <div className={classes.LeftImage}>
              <div className={classes.LeftImageInnerContainer}>
                <div className={classes.GovernmentImage}>
                  <img src={government} alt="government" />
                </div>
                <div className={classes.Ethereum}>
                  <img src={ethereum} alt="ethereum" />
                </div>
                <div className={classes.DodgeCoin}>
                  <img src={dodgecoin} alt="dodgecoin" />
                </div>
                <div className={classes.Logo}>
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </div>
            <div className={classes.RightContainer}>
              <div className={classes.WelcomeText}>
                <p>Welcome...</p>
              </div>
              <div className={classes.ShortInfoContainer}>
                <p>
                  Login to your account using your Government Id & Password.
                </p>
              </div>
              <div className={classes.FormContainer}>
                <div className={classes.UserIdContainer}>
                  <p>Government Id</p>
                  <input type="text" name="id" onChange={inputHandler} />
                </div>
                <div className={classes.PasswordContainer}>
                  <p>Password</p>
                  <input type="password" name="password" onChange={inputHandler} />
                </div>
            
                  <div className={classes.ButtonContainer} onClick={checkLogin}>
                  <button type="button">Log in</button>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
