import React from "react"
import classes from './Process.module.css'
import apply from '../../../assets/images/apply.jpg'
import approved from '../../../assets/images/approved.png'
import track from '../../../assets/images/track.jpg'
import eligibility from '../../../assets/images/eligibility.svg'
export default function Process(){
    return(
        <div className={classes.OuterContainer}>
            <div className={classes.InnerContainer}>
                <div className={classes.ProcessContainer}>
                    <div className={classes.ProcessText}>
                        <p>The Process</p>
                    </div>
                    <div className={classes.ProcessSteps}>
                        <div className={classes.ContainerOne}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}