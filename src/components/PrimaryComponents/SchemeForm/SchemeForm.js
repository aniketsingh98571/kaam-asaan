import React, { useState } from "react";
import classes from "./SchemeForm.module.css";
import upload_adhaar from "../../../assets/images/upload_adhaar.png";
import upload_image from "../../../assets/images/upload_image.png";
import arrow from "../../../assets/images/top_arrow.png";
import { Link } from "react-router-dom";
import MetmaskConnection from '../../CustomHook/MetaMaskConnection'
import { pinImage,pinJson } from "../../CustomHook/IPFSFunctions/pinData";
export default function SchemeForm() {
  const [applicationData,setApplicationData]=useState({
    name:null,
    mobile:null,
    address:null,
    adhaar:null,
    profile:null,
    status:"Under Review"
  })
  const [submit,setSubmit]=useState(false)
const inputHandler=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  setApplicationData({...applicationData,[name]:value})
}
const fileInputHandler=(e)=>{
  const name=e.target.name;
  const value=e.target.files[0];
  console.log(value)
 const url= URL.createObjectURL(value);
  document.getElementById(name).src=url
  document.getElementById(name).style.width="100px"
  document.getElementById(name).style.height="auto"
  setApplicationData({...applicationData,[name]:value})
}
const submitHandler=()=>{
  if(applicationData.name&&applicationData.address&&applicationData.mobile&&applicationData.profile&&applicationData.adhaar){
    if(applicationData.mobile.length>10||applicationData.mobile.length<10){
      alert("Invalid Mobile Number")
    }
    else{
    MetmaskConnection("check").then(async(ethData)=>{
      const login=sessionStorage.getItem("login")
      const username=sessionStorage.getItem("username")
      if(ethData&&login){
        setSubmit(true)
        const pinAdhaarHash=await pinImage(applicationData.adhaar,username,5269)
       if(pinAdhaarHash.IpfsHash){
          const pinImageHash=await pinImage(applicationData.profile,username,5269)
          if(pinImageHash.IpfsHash){
            applicationData["adhaar"]=pinAdhaarHash.IpfsHash
            applicationData["profile"]=pinImageHash.IpfsHash
            const pinJsonHash=await pinJson(applicationData,username)
            console.log(pinJsonHash)
            if(pinJsonHash.IpfsHash){
              alert("Application Submitted")
              setSubmit(false)
            }
          }
        }
      }
      else{
        alert("connect metamask first")
      }
      
    }).catch((err)=>{
      console.log(err)
      alert("Something went wrong, try again!")
  })
}
  }
  else{
    alert("Please fill out all the fields")
  }

}
  return (
    <div className={classes.OuterContainer}>
      <div className={classes.InnerContainer}>
        <div className={classes.MainContainer}>
          <div className={classes.BackSchemesContainer}>
          <Link style={{textDecoration:"none"}} to="/AllSchemes">
            <button>
              <img src={arrow} alt="arrow" />
              Go back to all Schemes
            </button>
            </Link>
          </div>
          <div className={classes.OuterFormContainer}>
            <div className={classes.FirstForm}>
              <div className={classes.FormText}>
                <p>Please fill in your information</p>
              </div>
              <div className={classes.FirstBoxContainer}>
                <div className={classes.NameContainer}>
                  <div className={classes.NameText}>
                    <p>Your Full Name</p>
                  </div>
                  <div className={classes.NameInput}>
                    <input type="text" name="name" onChange={inputHandler}/>
                  </div>
                </div>
                <div className={classes.MobileContainer}>
                  <div className={classes.MobileText}>
                    <p>Mobile Number</p>
                  </div>
                  <div className={classes.MobileInput}>
                    <input type="number" name="mobile" onChange={inputHandler} />
                  </div>
                </div>
                <div className={classes.AddressContainer}>
                  <div className={classes.AddressText}>
                    <p>Address</p>
                  </div>
                  <div className={classes.AddressInput}>
                    <input type="text" name="address" onChange={inputHandler} />
                  </div>
                </div>
              </div>
              <div className={classes.SecondBoxContainer}>
                <div className={classes.AdhaarUploadContainer}>
                  <div className={classes.AdhaarText}>
                    <p>Upload Aadhaar Card</p>
                  </div>
                  <div className={classes.AdhaarInput}>
                    <div className={classes.UploadImageContainer}>
                      <label htmlFor="ProfileInputId">
                        <div className={classes.LabelContainer}>
                          <img
                            src={upload_adhaar}
                            alt="Upload"
                            id="adhaar"
                          />
                          <span id="ArtWorkImageTextId">
                            {" "}
                            Browse from device
                          </span>
                        </div>
                      </label>
                      <input
                        className={classes.FileInput}
                        type="file"
                        id="ProfileInputId"
                        accept=".png,.jpeg"
                        name="adhaar"
                        onChange={fileInputHandler}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.SecondForm}>
              <div className={classes.UploadImageContainer1}>
                <div className={classes.UploadImageText}>
                  <p>Upload Image</p>
                </div>
                <div className={classes.UploadImageInput1}>
                  <div className={classes.UploadImageContainer1}>
                    <label htmlFor="ProfileInputId1">
                      <div className={classes.LabelContainer1}>
                        <img
                          src={upload_image}
                          alt="Upload"
                          id="profile"
                        />
                        <span id="ArtWorkImageTextId"> Browse from device</span>
                      </div>
                    </label>
                    <input
                      className={classes.FileInput1}
                      type="file"
                      id="ProfileInputId1"
                      accept=".png,.jpeg"
                      name="profile"
                      onChange={fileInputHandler}
                     />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.TermsContainer}>
            <div className={classes.CheckBoxContainer}>
              <input type="checkbox" />
            </div>
            <div className={classes.TermsText}>
              <p>
                I agree to the <a href="/">terms and conditions</a> as set out
                by user agreement
              </p>
            </div>
          </div>
          <div className={classes.ButtonContainer}>
            <button type="button" onClick={submitHandler}>{submit?"Submiting...": "Submit"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
