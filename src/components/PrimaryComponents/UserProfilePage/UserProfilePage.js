import React, { useEffect, useState } from "react";
import classes from "./UserProfilePage.module.css";
import user_profile from "../../../assets/images/profile-user.png";
import schemes_logo from "../../../assets/images/scheme_logo.png";
import clipboard from "../../../assets/images/clipboard.png";
import AllSchemeClass from "../AllSchemes/AllSchemes.module.css";
import { getData } from "../../CustomHook/IPFSFunctions/getData";

export default function UserProfilePage() {
  const [schemeData,setSchemeData]=useState([])
  useEffect(()=>{
    fetchSchemeData()
  },[])
  const fetchSchemeData=async()=>{
    const username=sessionStorage.getItem("username")
    const schemeDataBuffer=await getData(username)
    if(schemeDataBuffer.data.rows){
     schemeDataBuffer.data.rows.forEach((data)=>{
       if(!data.date_unpinned){
         setSchemeData([...schemeData,data])
       }
     })
     console.log(schemeData)
    }
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
      <div className={classes.InnerContainer}>
        <div className={classes.MainContainer}>
          <div className={classes.ProfileContainer}>
            <div className={classes.ProfileImageContainer}>
              <img src={user_profile} alt="user" />
            </div>
            <div className={classes.ProfileInfo}>
              <div className={classes.UserNameContainer}>
                <p>@sansyrox</p>
              </div>
              <div className={classes.MetamaskContainer}>
                <p>Metamask Address : </p>
                <span>
                  {address.slice(0, 6) + "..." + address.slice(-4)}
                  <img src={clipboard} alt="clipboard" />
                </span>
              </div>
              <div className={classes.WalletBalance}>
                <p>Wallet Balance : </p>
                <span>0.1 ETH</span>
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
              {AllSchemes.map((schemes) => {
                return (
                  <div
                    className={AllSchemeClass.SingleCardContainer}
                    key={schemes.id}
                  >
                    <div className={classes.OuterUpperContainer}>
                      <div className={classes.UpperCardContainer}>
                        <div className={AllSchemeClass.SchemesLogoContainer}>
                          <img src={schemes.schemeImage} alt="logo" />
                        </div>
                        <div className={AllSchemeClass.SchemesTextContainer}>
                          <p>{schemes.SchemeName}.</p>
                        </div>
                      </div>
                      <div className={AllSchemeClass.PriceContainer}>
                        <p>
                          <span style={{ margin: "0 60px 0 12px" }}>
                            Allocated Officer :
                          </span>
                          {schemes.officer}
                        </p>
                        <div className={classes.ViewOfficersPage}>
                          <a href="/">View Officer's page</a>
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
                              {schemes.schemeDescription.substring(0, 150)}.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={AllSchemeClass.BodyContainer}>
                        <p>
                          <span>Body : </span>
                          {schemes.schemePrice}
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
                          {schemes.status}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
