import React from "react";
import classes from "./LoginPage.module.css";
import government from "../../../assets/images/government.png";
import ethereum from "../../../assets/images/ethereum.png";
import dodgecoin from "../../../assets/images/dodgecoin.png";
import logo from "../../../assets/images/logo.png";
export default function LoginPage() {
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
                  <input type="text" />
                </div>
                <div className={classes.PasswordContainer}>
                  <p>Password</p>
                  <input type="password" />
                </div>
                <div className={classes.ButtonContainer}>
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
