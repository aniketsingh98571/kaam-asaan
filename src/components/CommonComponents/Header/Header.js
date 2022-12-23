import React,{useState} from "react"
import classes from './Header.module.css'
import logo from '../../../assets/images/logo.png'
import { Link } from "react-router-dom"
export  default function Header(){
    const [active,setActive]=useState("Home")
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
                           <Link className={classes.Link} to="/"><li onClick={()=>setActive("Home")} className={active==="Home"?classes.Active:classes.Inactive}>Home</li></Link> 
                           <Link className={classes.Link} to="/AllSchemes"><li onClick={()=>setActive("AllSchemes")} className={active==="AllSchemes"||window.location.pathname==="/AllSchemes"?classes.Active:classes.Inactive}>Schemes</li></Link> 
                           <a  className={classes.Link} href="mailto: abc@example.com"> <li className={active==="Support"?classes.Active:classes.Inactive}>Support</li></a>
                           <Link className={classes.Link} to="/learn"> <li className={active==="Learn"?classes.Active:classes.Inactive} onClick={()=>setActive("Learn")}>Learn</li></Link>
                            <Link className={classes.Link} to="/about"><li className={active==="About"?classes.Active:classes.Inactive} onClick={()=>setActive("About")}>About Us</li></Link>
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