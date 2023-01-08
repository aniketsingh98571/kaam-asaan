import React, { useEffect, useState } from "react"
import classes from './GovernmentProfile.module.css'
import profile_user from '../../../assets/images/profile-user.png'
import schemes_logo from '../../../assets/images/scheme_logo.png'
import ImageGallery from "../../PopUps/ImageGallery/ImageGallery"
import { collection, getDocs,updateDoc,doc} from "firebase/firestore";
import { db } from "../../CustomHook/Firebase";
import { pinJson } from "../../CustomHook/IPFSFunctions/pinData"
import { unpinData } from "../../CustomHook/IPFSFunctions/unpinData"
import { PieChart, Pie, Tooltip} from 'recharts';
export default function GovernmentProfile(){
    const admin=sessionStorage.getItem("admin")
    const [showImage,setShowImage]=useState({panCard:false,userImage:false,hash:null})
    const [userData,setUserData]=useState([])
    const showImageFunction=(key,hash)=>{
        if(key==="userImage")
          setShowImage({...showImage,userImage:true,hash:hash})
        else if(key==="panCard")
        setShowImage({...showImage,panCard:true,hash:hash})
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
        if(doc.mainData.status==="Under Review")
           initialArray.push(doc)
        })
        setUserData(initialArray)
    }
   const schemeStatus=(data,status)=>{
    const docRef = doc(db, "applicationData",data.docId);
    const data1 = {
        "mainData.status": status
      };
      updateDoc(docRef, data1)
      .then(async docRef => {
          console.log("Value of an Existing Document Field has been updated");
          const newData={
            ...data.mainData,
            status:status,
            aadhaar:data.ipfsData.aadharHash,
            profile:data.ipfsData.imageHash
          }
          const res=await unpinData(data.docId)
          console.log(res)
          if(res==="OK"){
            const res=await pinJson(newData,sessionStorage.getItem("username"))
            console.log(res)
            if(res.IpfsHash){
                alert("Action recorded")
                window.location.reload()
            }
          }
        })
      .catch(error => {
          console.log(error);
      })
}

const data01 = [
    { name: 'Total Application', value: 400 },
    { name: 'Accepted', value: 150 },
    { name: 'Rejected', value: 150 },
    { name: 'Pending', value: 100 },
    
];
    return(
        <div className={classes.OuterContainer}>
            {
                showImage.panCard?
            <ImageGallery setShowImage={setShowImage} hash={showImage.hash}/>:showImage.userImage?  <ImageGallery setShowImage={setShowImage} hash={showImage.hash}/>:null
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
                       <>  {
                        admin?
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
                                            <p onClick={()=>showImageFunction("userImage",data.ipfsData.imageHash)}>View Image</p>
                                        </div>
                                        <div className={classes.PanImage}>
                                            <span>Pan Image : </span>
                                            <p onClick={()=>showImageFunction("panCard",data.ipfsData.aadharHash)}>View Image</p>
                                        </div>
                                        <div className={classes.ButtonContainer}>
                                            <div className={classes.AcceptButton} onClick={()=>schemeStatus(data,"Accepted")}>
                                                <button type="button">Accept</button>
                                            </div>
                                            <div className={classes.RejectButton} onClick={()=>schemeStatus(data,"Rejected")}>
                                                <button type="button">Reject</button>
                                            </div>
                                        </div>
                                    </div>    
                                </div> 
                                )
                            })
                          }  
                        </div>
                    </div>:userData.length===0?<div>
                        <p style={{fontSize:"48px",padding:"10px 0 20px 0", fontWeight:"bolder", fontFamily:'OpenSans-Regular'}}>No Data</p>
                    </div>:<div className={classes.Loading}>
                        <p style={{fontSize:"48px",padding:"10px 0 20px 0", fontWeight:"bolder", fontFamily:'OpenSans-Regular'}} >loading...</p>
                    </div>:""
}
                    </>
              }
                </div>
                <div className={classes.StatsContainer}>
                    <div className={classes.StatsText}>
                        <p>Lets Check your stats Officer!</p>
                    </div>
                    <div className={classes.PieContainer}>
                
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={data01} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
     </div>
                </div>
            </div>
        </div>
    )
}