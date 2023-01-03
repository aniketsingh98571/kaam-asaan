import React, { useEffect, useState } from "react"
import classes from './GovernmentProfile.module.css'
import profile_user from '../../../assets/images/profile-user.png'
import schemes_logo from '../../../assets/images/scheme_logo.png'
import ImageGallery from "../../PopUps/ImageGallery/ImageGallery"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../CustomHook/Firebase";
export default function GovernmentProfile(){
    const [showImage,setShowImage]=useState({panCard:false,userImage:false})
    const [userData,setUserData]=useState([])
    const showImageFunction=()=>{
        setShowImage({...showImage,panCard:true})
    }
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        const docRef = collection(db, "applicationData");
        const docSnap = await getDocs(docRef);
        let initialArray=[]
        docSnap.forEach((data)=>{
        const doc=data.data()
        console.log(doc)
        initialArray.push(doc)
        })
        setUserData(initialArray)
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
                    {
                             userData.length>0?
                             
                    <div className={classes.BelowContainer}>
                        {console.log(userData)}
                        <div className={classes.CardContainer}>
                          {
                          userData.map((data)=>{
                                return(
                                    <div className={classes.SingleCard}>
                                    <div className={classes.UpperCardContainer}>
                                        <div className={classes.LogoContainer}>
                                           <img src={schemes_logo} alt="logo"/>   
                                        </div>
                                        <div className={classes.SchemeName}>
                                            <p>Prime Minister Employment Generation Programme</p>    
                                        </div>    
                                    </div>
                                    <div className={classes.BelowCardContainer}>
                                        <div className={classes.PersonName}>
                                            <span>Name:</span>
                                            <p>{data.mainData.name}</p>
                                        </div>
                                        <div className={[classes.PersonAddress,classes.Address].join("")}>
                                            <span>Address:</span>
                                            <p>{data.mainData.address}</p>
                                        </div>
                                        <div className={classes.PersonNumber}>
                                            <span>Number:</span>
                                            <p>{data.mainData.mobile}</p>
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
                    </div>:<div className={classes.Loading}>
                        <p>loading...</p>
                    </div>
              }
                </div>
            </div>
        </div>
    )
}