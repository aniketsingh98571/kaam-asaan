import React, { useState } from "react"
import classes from './UserName.module.css'
import MetaMaskConnection from '../../CustomHook/MetaMaskConnection'
export default function UserName(props){
    const [username,setUsername]=useState("")
    const addUser=()=>{
        MetaMaskConnection("check").then((ethData)=>{
            console.log(ethData)
            props.registerUser(ethData.account,username)
        })
    }
    const usernameHandler=(e)=>{
        setUsername(e.target.value)
    }
    return(
        <div className={classes.OuterContainer}>
            <div className={classes.InnerContainer}>
                <div className={classes.MainContainer}>
                    <div className={classes.UsernameText}>
                        <p>Please set your username</p>
                    </div>
                    <div className={classes.UsernameContainer}>
                        <p>Username</p>
                        <input type="text" onChange={usernameHandler} />
                    </div>
                    <div className={classes.ButtonContainer}>
                        <button type="button" onClick={addUser}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}