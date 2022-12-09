import React from "react"
import classes from './Footer.module.css'
import logo from '../../../assets/images/logo.png'
import facebook from '../../../assets/images/facebook.png'
import instagram from '../../../assets/images/instagram.png'
import email from '../../../assets/images/email.png'
import linkedin from '../../../assets/images/linkedin.png'
import top_arrow from '../../../assets/images/top_arrow.png'
export default function Footer(){
    return(
        <div className={classes.OuterContainer}>
            <div className={classes.InnerContainer}>
                <div className={classes.FooterContainer}>
                    <div className={classes.TopContainer}>
                        <div className={classes.FirstContainer}>
                            <div className={classes.LogoContainer}>
                                <img src={logo} alt="logo"/>    
                            </div>
                            <div className={classes.SocialMediaContainer}>
                                <img src={facebook} alt="facebook"/>
                                <img src={instagram} alt="instagram"/>
                                <img src={linkedin} alt="linkedin"/>
                                <img src={email} alt="email"/>
                            </div>
                        </div>
                        <div className={classes.SecondContainer}>
                            <div className={classes.MainText}>
                                <p>About Kaam Asaan</p>
                            </div>
                            <div className={classes.SecondaryContainer}>
                                <p>Text One</p>
                                <p>Text Two</p>
                            </div>
                        </div>
                        <div className={classes.ThirdContainer}>
                            <div className={classes.MainText}>
                                <p>About Kaam Asaan</p>
                            </div>
                            <div className={classes.SecondaryContainer}>
                                <p>Text One</p>
                                <p>Text Two</p>
                            </div>
                        </div>
                        <div className={classes.FourthContainer}>
                            <p>Back to Top <img src={top_arrow} alt="arrow"/></p>
                        </div>
                    </div>
                    <div className={classes.BelowContainer}>
                        <div className={classes.DevelopedContainer}>
                            <p>Developed by Aniket Singh</p>
                            <p>Designed by Dip Das</p>
                        </div>
                        <div className={classes.CopyRightContainer}>
                            <p>&copy; All Rights Resereved 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}