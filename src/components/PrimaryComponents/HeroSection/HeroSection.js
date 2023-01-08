import React from "react"
import classes from './HeroSection.module.css'
import herosection from '../../../assets/images/herosection.png'
import arrow from '../../../assets/images/arrow.png'
import bitcoin from '../../../assets/images/bitcoin.png'
import ethereum from '../../../assets/images/ethereum.png'
import dodgecoin from '../../../assets/images/dodgecoin.png'
import Process from "../ProcessSection/Process"
import { Link } from "react-router-dom"
export default function HeroSection(){
    return(
       <div className={classes.OuterContainer}>
        <div className={classes.InnerContainer}>
            <div className={classes.UpperContainer}>
                <div className={classes.LeftTextContainer}>
                    <div className={classes.MainTextContainer}>
                        <p>Apply in Government schemes, using Crypto...</p>
                        <p>Making your Kaam Asaan!</p>
                    </div>
                    <div className={classes.StartButtonContainer}>
                      <Link to="/AllSchemes">  <button type="button">
                            Get Started
                            <img src={arrow} alt="arrow"/>
                        </button></Link>
                    </div>
                </div>
                <div className={classes.RightImageContainer}>
                    <div className={classes.ImageContainer}>
                        <div className={classes.MainImage}>
                          <img src={herosection} alt="parents"/>
                        </div>
                        <div className={classes.BitCoinImage}>
                          <img src={bitcoin} alt="bitcoin"/>
                        </div>
                        <div className={classes.DodgeContainer}>
                            <img src={dodgecoin} alt="dodgecoin"/>
                        </div>
                        <div className={classes.EthereumContainer}>
                            <img src={ethereum} alt="ethereum"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.StatsContainer}>
                <div className={classes.OuterStatsContainer}>
                    <div className={classes.ReceivedApplicationContainer}>
                        <p>4000+</p>
                        <p>Application Received</p>
                    </div>
                    <div className={classes.ServedApplication}>
                        <p>2800+</p>
                        <p>Application Served</p>
                    </div>
                    <div className={classes.GovernmentOfficials}>
                        <p>100+</p>
                        <p>Government Officials</p>
                    </div>
                    <div className={classes.ActiveUsers}>
                        <p>500+</p>
                        <p>Active users</p>
                    </div>
                </div>
            </div>
            <div className={classes.ProcessContainer}>
                <Process/>
            </div>
        </div>
       </div>
    )
}