import React from "react"
import classes from './AdminHeader.module.css'
import logo from '../../../assets/images/logo.png'
import { LOGIN } from "../../../URL"
export default function AdminHeader(){
   const loginCheck=sessionStorage.getItem("admin")
   const disconnetFunction=()=>{
      sessionStorage.removeItem("admin")
      window.location.href=LOGIN
   }
 return(
    <div className={classes.OuterContainer}>
      <div className={classes.InnerContainer}>
         <div className={classes.AdminHeaderContainer}>
            <div className={classes.LogoContainer}>
               <img src={logo} alt="logo"/>
            </div>
            {
               loginCheck?
            <div className={classes.DisconnectButton} onClick={disconnetFunction}>
               <button type="button">Logout</button>
            </div>:null
          }
         </div>
      </div>
    </div>
 )
}
