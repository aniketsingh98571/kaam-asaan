import React, { useEffect, useState } from "react";
import classes from "./UserProfilePage.module.css";
import user_profile from "../../../assets/images/profile-user.png";
import schemes_logo from "../../../assets/images/scheme_logo.png";
import clipboard from "../../../assets/images/clipboard.png";
import AllSchemeClass from "../AllSchemes/AllSchemes.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../CustomHook/Firebase";
import MetamaskConnection from '../../CustomHook/MetaMaskConnection'
export default function UserProfilePage() {
  const [schemeData,setSchemeData]=useState([])
  const [userData,setUserData]=useState([])
  useEffect(()=>{
    fetchSchemeData()
  },[])
  const fetchSchemeData=async()=>{
    const res=await MetamaskConnection("check");
    setUserData(res)
    const username=sessionStorage.getItem("username")
    const docRef = collection(db, "applicationData");
    const docSnap = await getDocs(docRef);
    let initialArray=[];
    docSnap.forEach((data)=>{
    const doc=data.data()
    console.log("run")
  if(doc.username===username){
      console.log("true")
      console.log(schemeData)
       initialArray.push(doc)
       }
      })
     console.log(initialArray)
     setSchemeData(initialArray)
  }
  const copyToClipboard=async(text)=>{
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
      alert("text copied")
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
 const disconnectMetamask=()=>{
  sessionStorage.removeItem("login")
  sessionStorage.removeItem("username")
  window.location.href="/"
 }
  return (
    
    <div className={classes.OuterContainer}>
      {
        userData.account?
       <div className={classes.InnerContainer}>
        {console.log(schemeData)}
        <div className={classes.MainContainer}>
          <div className={classes.ProfileContainer}>
            <div className={classes.ProfileImageContainer}>
              <img src={user_profile} alt="user" />
            </div>
            <div className={classes.ProfileInfo}>
              <div className={classes.UserNameContainer}>
                <p>@{sessionStorage.getItem("username")}</p>
              </div>
              <div className={classes.MetamaskContainer}>
                <p>Metamask Address : </p>
                <span>
                  {userData.account.slice(0, 6) + "..." + userData.account.slice(-4)}
                  <img  onClick={()=>{copyToClipboard(userData.account)}} src={clipboard} alt="clipboard" />
                </span>
              </div>
              <div className={classes.WalletBalance}>
                <p>Wallet Balance : </p>
                <span>{userData.balance.split(".")[1]?.length > 3
                  ? parseFloat(userData.balance).toFixed(4)
                  : userData.balance} ETH</span>
              </div>
              <div className={classes.DisconnectButton} onClick={disconnectMetamask}>
                <button type="button">Disconnect from Metamask</button>
              </div>
            </div>
          </div>
          <div className={classes.AppliedScheme}>
            <div className={classes.AppliedText}>
              <p>Applied Schemes</p>
            </div>
            <div className={classes.SchemesContainer}>
              {schemeData.length>0?
              schemeData.map((schemes) => {
                return (
                  <div
                    className={AllSchemeClass.SingleCardContainer}
                    key={schemes.id}
                  >
                    <div className={classes.OuterUpperContainer}>
                      <div className={classes.UpperCardContainer}>
                        <div className={AllSchemeClass.SchemesLogoContainer}>
                          <img src={schemes_logo} alt="logo" />
                        </div>
                        <div className={AllSchemeClass.SchemesTextContainer}>
                          <p>Prime Minister Employment Generation Programme.</p>
                        </div>
                      </div>
                      <div className={AllSchemeClass.PriceContainer}>
                        <p>
                          <span style={{ margin: "0 60px 0 12px" }}>
                            Allocated Officer :
                          </span>
                          Mr. Singh
                        </p>
                        <div className={classes.ViewOfficersPage}>
                          <a href="/admin">View Officer's page</a>
                        </div>
                      </div>
                    </div>
                    <div className={AllSchemeClass.BelowCardContainer}>
                      <div className={AllSchemeClass.BelowMajorCardContainer}>
                        <div className={AllSchemeClass.FirstContainer}>
                          <div className={AllSchemeClass.DescriptionContainer}>
                            <p>
                              <span>Description :</span>
                            </p>
                          </div>
                        </div>
                        <div className={AllSchemeClass.SecondContainer}>
                          <div
                            className={AllSchemeClass.DescriptionBodyContainer}
                          >
                            <p>
                            The scheme is implemented by Khadi and Village Industries Commission (KVIC) functioning as the nodal agency at the national level. At the state level, the scheme is implemented through State.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={AllSchemeClass.BodyContainer}>
                        <p>
                          <span>Body : </span>
                          Human Development
                        </p>
                      </div>
                      <div className={AllSchemeClass.PriceContainer}>
                        <p>
                          <span>Price :</span>
                          0.1 ETH
                        </p>
                      </div>
                      <div className={AllSchemeClass.PriceContainer}>
                        <p>
                          <span style={{ margin: "0 60px 0 0px" }}>
                            Status :
                          </span>
                          {schemes.mainData.status}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }):<div>
                 <p style={{fontSize:"48px",padding:"10px 0 20px 0", fontWeight:"bolder", fontFamily:'OpenSans-Regular'}}>No Data</p>
                </div>}
            </div>
          </div>
        </div>
      </div>:<div className={classes.Load}>
        <p style={{fontSize:"48px",padding:"10px 0 20px 0", fontWeight:"bolder", fontFamily:'OpenSans-Regular'}}>Loading...</p>
      </div>
}
    </div>
            
    )
}
