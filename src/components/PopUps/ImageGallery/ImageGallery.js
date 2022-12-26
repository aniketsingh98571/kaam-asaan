import React from 'react'
import classes from './ImageGallery.module.css'
import cross from '../../../assets/images/cross.png'
export default function ImageGallery(props){
    const closeImage=()=>{
        props.setShowImage(false)
    }
    return(
        <div className={classes.OuterContainer}>
            <div className={classes.InnerContainer}>
                <div className={classes.MainContainer}>
                    <div className={classes.UpperContainer}>
                        <img src={cross} alt="cross" onClick={closeImage}/>
                    </div>
                    <div className={classes.ImageContainer}>
                        <img src="https://5.imimg.com/data5/TP/US/MU/SELLER-51778781/pan-card-500x500.jpg" alt="pan"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
