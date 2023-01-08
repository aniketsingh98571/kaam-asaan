import React from "react"
import classes from './Process.module.css'
import apply from '../../../assets/images/apply.png'
import approved from '../../../assets/images/approved.png'
import track from '../../../assets/images/track.png'
import eligibility from '../../../assets/images/eligibility.png'
export default function Process(){
    const processData=[
        {
            classname:classes.ContainerOneOne,
            name:"Check Eligibility",
            image:eligibility,
            description:"Our Government Officers makes sure that your submitted application is legit and took necessary actions based on your submited docs."
        },
        {
            background:"linear-gradient(175.41deg, rgba(217, 217, 217, 0) 22.49%, rgba(37, 51, 122, 0.5) 171.4%)",
            classname:classes.ContainerTwo,
            name:"Apply Online",
            image:apply,
            description:"Our portal reduces the friction of you visiting different desks in government offices."
        },
        {
            classname:classes.ContainerThree,
            name:"Get Digital Approval",
            image:approved,
            description:"Based on your application form and documents which you submitted, a government officer will take the necessary action. "
        },
        {
            classname:classes.ContainerFour,
            background:"linear-gradient(175.41deg, rgba(217, 217, 217, 0) 22.49%, rgba(37, 51, 122, 0.5) 171.4%)",
            name:"Track Your Application",
            image:track,
            description:"Track your application by visiting your profile page "
        }
    ]
    return(
        <div className={classes.OuterContainer}>
            <div className={classes.InnerContainer}>
                <div className={classes.ProcessContainer}>
                    <div className={classes.ProcessText}>
                        <p>The Process</p>
                    </div>
                    <div className={classes.ProcessSteps}>
                      {
                        processData.map((ele,i)=>{
                            return(
                                <div className={[classes.ContainerOne,ele.classname].join("")} style={{
                                    background:ele.background
                                }}>
                                <div className={classes.ContainerOneImage}>
                                    <img src={ele.image}/>
                                </div>
                                <div className={classes.ContainerOneTitle}>
                                    <p>{ele.name}</p>
                                </div>
                                <div className={classes.ContainerOneDescription}>
                                    <p>{ele.description} </p>
                                </div>
                            </div>
                            )
                        })
                      }
                    </div>
                </div>
            </div>
        </div>
    )
}