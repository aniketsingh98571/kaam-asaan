import React from "react"
import classes from './Header.module.css'
import logo from '../../../assets/images/logo.png'
export  default function Header(){
    return (
        <div className={classes.OuterContainer}>
            <div className={classes.InnerContainer}>
                <div className={classes.FlexContainer}>
                    <div className={classes.LeftContainer}>
                        <div className={classes.LogoContainer}>
                            <img src={logo} alt="kaam asaan"/>
                        </div>
                    </div>
                    <div className={classes.RightContainer}>
                        <div className={classes.ListContainer}>
                            <li>Home</li>
                            <li>Schemes</li>
                            <li>Support</li>
                            <li>Learn</li>
                            <li>About Us</li>
                        </div>
                        <div className={classes.ConnectMetamask}>
                            <button type="button">Connect Metamask</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}