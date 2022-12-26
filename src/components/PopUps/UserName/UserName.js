import React from "react"
import classes from './UserName.module.css'
export default function UserName(){
    return(
        <div className={classes.OuterContainer}>
            <div className={classes.InnerContainer}>
                <div className={classes.MainContainer}>
                    <div className={classes.UsernameText}>
                        <p>Please set your username</p>
                    </div>
                    <div className={classes.UsernameContainer}>
                        <p>Username</p>
                        <input type="text" />
                    </div>
                    <div className={classes.ButtonContainer}>
                        <button type="button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}