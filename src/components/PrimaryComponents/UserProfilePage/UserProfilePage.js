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
  const AllSchemes = [
    {
      id: "P01",
      schemeImage: schemes_logo,
      SchemeName: "Prime Minister Employment Generation Programme",
      schemeDescription:
        " The scheme is implemented by Khadi and Village Industries Commission (KVIC) functioning as the nodal agency at the national level. At the state level, the scheme is implemented through State KVIC Directorates, State Khad and Village Industries Boards (KVIBs), District Industries Centres (DICs) and banks. In such cases KVIC routes government subsidy through designated banks for eventual disbursal  to the beneficiaries / entrepreneurs directly into their bank accounts.",
      schemeBenefits:
        "The Prime Minister Employment Generation Programme (PMEGP) is a Government of India-backed credit-linked subsidy scheme. Under this scheme, beneficiaries can get a subsidy amounting to 15-35% of the project cost from the government.",
      schemePrice: 0.01,
      status: "Under Review",
      officer: "Mr. Singh",
    },
    {
      id: "P02",
      schemeImage: schemes_logo,
      SchemeName: "Prime Minister Employment Generation Programme",
      schemeDescription:
        " The scheme is implemented by Khadi and Village Industries Commission (KVIC) functioning as the nodal agency at the national level. At the state level, the scheme is implemented through State KVIC Directorates, State Khad and Village Industries Boards (KVIBs), District Industries Centres (DICs) and banks. In such cases KVIC routes government subsidy through designated banks for eventual disbursal  to the beneficiaries / entrepreneurs directly into their bank accounts.",
      schemeBenefits:
        "The Prime Minister Employment Generation Programme (PMEGP) is a Government of India-backed credit-linked subsidy scheme. Under this scheme, beneficiaries can get a subsidy amounting to 15-35% of the project cost from the government.",
      schemePrice: 0.01,
      status: "Approved",
      officer: "Mr. Singh",
    },
    {
      id: "P03",
      schemeImage: schemes_logo,
      SchemeName: "Prime Minister Employment Generation Programme",
      schemeDescription:
        " The scheme is implemented by Khadi and Village Industries Commission (KVIC) functioning as the nodal agency at the national level. At the state level, the scheme is implemented through State KVIC Directorates, State Khad and Village Industries Boards (KVIBs), District Industries Centres (DICs) and banks. In such cases KVIC routes government subsidy through designated banks for eventual disbursal  to the beneficiaries / entrepreneurs directly into their bank accounts.",
      schemeBenefits:
        "The Prime Minister Employment Generation Programme (PMEGP) is a Government of India-backed credit-linked subsidy scheme. Under this scheme, beneficiaries can get a subsidy amounting to 15-35% of the project cost from the government.",
      schemePrice: 0.01,
      status: "Rejected",
      officer: "Mr. Singh",
    },
  ];
  const address = "0xB90657d0af39EdF73bf5553da9BDF2f68Ae16198";
  return (
    
    <div className={classes.OuterContainer}>
      {
        userData&&schemeData.length>0?
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
                  <img src={clipboard} alt="clipboard" />
                </span>
              </div>
              <div className={classes.WalletBalance}>
                <p>Wallet Balance : </p>
                <span>{userData.balance.split(".")[1]?.length > 3
                  ? parseFloat(userData.balance).toFixed(4)
                  : userData.balance} ETH</span>
              </div>
              <div className={classes.DisconnectButton}>
                <button type="button">Disconnect from Metamask</button>
              </div>
            </div>
          </div>
          <div className={classes.AppliedScheme}>
            <div className={classes.AppliedText}>
              <p>Applied Schemes</p>
            </div>
            <div className={classes.SchemesContainer}>
              {schemeData.map((schemes) => {
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
              })}
            </div>
          </div>
        </div>
      </div>:<div className={classes.Load}>
        <p>Loading...</p>
      </div>
}
    </div>
            
    )
}
