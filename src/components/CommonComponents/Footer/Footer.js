import React from "react"
import classes from './Footer.module.css'
import logo from '../../../assets/images/no_text_logo.png'
import facebook from '../../../assets/images/facebook.png'
import instagram from '../../../assets/images/instagram.png'
import email from '../../../assets/images/email.png'
import linkedin from '../../../assets/images/linkedin.png'
import top_arrow from '../../../assets/images/top_arrow.png'
export default function Footer(){
    const scrollToTop=()=>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
          });
    }
    return(
        <div className={classes.OuterContainer}>
            <div className={classes.InnerContainer}>
                <div className={classes.FooterContainer}>
                    <div className={classes.TopContainer}>
                        <div className={classes.FirstContainer}>
                            <div className={classes.LogoContainer}>
                                <img src={logo} alt="logo"/> 
                                <p>KAAM ASAAN</p>   
                            </div>
                            <div className={classes.SocialMediaContainer}>
                                <img src={facebook} alt="facebook"/>
                                <img src={instagram} alt="instagram"/>
                                <img src={linkedin} alt="linkedin"/>
                                <img src={email} alt="email"/>
                            </div>
                        </div>
                        <div className={classes.SecondContainer}>
                         
                            <div className={classes.SecondaryContainer}>
                                <p>Privacy Policy</p>
                                <p>Terms and Condition</p>
                            </div>
                        </div>
                        <div className={classes.ThirdContainer}>
                          
                            <div className={classes.SecondaryContainer}>
                                <p>Government Policy</p>
                                <p>Kaam Asaan Terms</p>
                            </div>
                        </div>
                        <div className={classes.FourthContainer} onClick={scrollToTop}>
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