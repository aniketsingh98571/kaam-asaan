import React, { useState } from "react"
import classes from './GovernmentProfile.module.css'
import profile_user from '../../../assets/images/profile-user.png'
import schemes_logo from '../../../assets/images/scheme_logo.png'
import ImageGallery from "../../PopUps/ImageGallery/ImageGallery"
export default function GovernmentProfile(){
    const [showImage,setShowImage]=useState({panCard:false,userImage:false})
    const showImageFunction=()=>{
        setShowImage({...showImage,panCard:true})
    }
    const AllSchemes=
        [   
            {
                id:"P01",
                schemeImage:schemes_logo,
                schemeName:"Prime Minister Employment Generation Programme",
                personeName:"Rahul Rana",
                personAddress:"Flat no 201, Shree Ram Apartment F Wing Siddhatek Nagar, Kamatwade Nashik Maharashtra.",
                personNumber:8600852655,
                personImage:profile_user,
                personPan:profile_user
            },
            {
                id:"P02",
                schemeImage:schemes_logo,
                schemeName:"Prime Minister Employment Generation Programme",
                personeName:"Rahul Rana",
                personAddress:"Flat no 201, Shree Ram Apartment F Wing Siddhatek Nagar, Kamatwade Nashik Maharashtra.",
                personNumber:8600852655,
                personImage:profile_user,
                personPan:profile_user
            },
            {
                id:"P03",
                schemeImage:schemes_logo,
                schemeName:"Prime Minister Employment Generation Programme",
                personeName:"Rahul Rana",
                personAddress:"Flat no 201, Shree Ram Apartment F Wing Siddhatek Nagar, Kamatwade Nashik Maharashtra.",
                personNumber:8600852655,
                personImage:profile_user,
                personPan:profile_user
            }
        
        ]
    
    return(
        <div className={classes.OuterContainer}>
            {
                showImage.panCard?
            <ImageGallery setShowImage={setShowImage}/>:null
          }
            <div className={classes.InnerContainer}>
                <div className={classes.MainContainer}>
                    <div className={classes.UpperContainer}>
                        <div className={classes.ImageContainer}>
                            <img src={profile_user} alt="user"/>
                        </div>
                        <div className={classes.InfoContainer}>
                            <div className={classes.NameContainer}>
                                <p>Name : </p>
                                <span>Tarun Singh</span>
                            </div>
                            <div className={classes.GovernmentId}>
                                <p>Government Id : </p>
                                <span>5269</span>
                            </div>
                            <div className={classes.Department}>
                                <p>Department : </p>
                                <span>Human Development</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.BelowContainer}>
                        <div className={classes.CardContainer}>
                          {
                            AllSchemes.map((data)=>{
                                return(
                                    <div className={classes.SingleCard}>
                                    <div className={classes.UpperCardContainer}>
                                        <div className={classes.LogoContainer}>
                                           <img src={data.schemeImage} alt="logo"/>   
                                        </div>
                                        <div className={classes.SchemeName}>
                                            <p>{data.schemeName}</p>    
                                        </div>    
                                    </div>
                                    <div className={classes.BelowCardContainer}>
                                        <div className={classes.PersonName}>
                                            <span>Name:</span>
                                            <p>{data.personeName}</p>
                                        </div>
                                        <div className={[classes.PersonAddress,classes.Address].join("")}>
                                            <span>Address:</span>
                                            <p>{data.personAddress}</p>
                                        </div>
                                        <div className={classes.PersonNumber}>
                                            <span>Number:</span>
                                            <p>{data.personNumber}</p>
                                        </div>
                                        <div className={classes.PersonImage}>
                                            <span>Person Image : </span>
                                            <p onClick={showImageFunction}>View Image</p>
                                        </div>
                                        <div className={classes.PanImage}>
                                            <span>Pan Image : </span>
                                            <p onClick={showImageFunction}>View Image</p>
                                        </div>
                                        <div className={classes.ButtonContainer}>
                                            <div className={classes.AcceptButton}>
                                                <button type="button">Accept</button>
                                            </div>
                                            <div className={classes.RejectButton}>
                                                <button type="button">Reject</button>
                                            </div>
                                        </div>
                                    </div>    
                                </div> 
                                )
                            })
                          }  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}