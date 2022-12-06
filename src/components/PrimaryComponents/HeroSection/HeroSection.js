import React from "react"
import classes from './HeroSection.module.css'
import herosection from '../../../assets/images/herosection.png'
import arrow from '../../../assets/images/arrow.png'
import bitcoin from '../../../assets/images/bitcoin.png'
import ethereum from '../../../assets/images/ethereum.png'
import dodgecoin from '../../../assets/images/dodgecoin.png'
export default function HeroSection(){
    return(
       <div className={classes.OuterContainer}>
        <div className={classes.InnerContainer}>
            <div className={classes.UpperContainer}>
                <div className={classes.LeftTextContainer}>
                    <div className={classes.MainTextContainer}>
                        <p>Apply in Government schemes, using Crypto...</p>
                        <p>Subheadline goes here</p>
                    </div>
                    <div className={classes.StartButtonContainer}>
                        <button type="button">
                            Get Started
                            <img src={arrow} alt="arrow"/>
                        </button>
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
        </div>
       </div>
    )
}