import React from "react";
import classes from "./SchemeForm.module.css";
import upload_adhaar from "../../../assets/images/upload_adhaar.png";
import upload_image from "../../../assets/images/upload_image.png";
import arrow from "../../../assets/images/top_arrow.png";
import { Link } from "react-router-dom";
export default function SchemeForm() {
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
                    <input type="text" />
                  </div>
                </div>
                <div className={classes.MobileContainer}>
                  <div className={classes.MobileText}>
                    <p>Mobile Number</p>
                  </div>
                  <div className={classes.MobileInput}>
                    <input type="number" />
                  </div>
                </div>
                <div className={classes.AddressContainer}>
                  <div className={classes.AddressText}>
                    <p>Address</p>
                  </div>
                  <div className={classes.AddressInput}>
                    <input type="text" />
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
                            id="ArtWorkImageId"
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
                        accept=".png,.jpeg,.webp,.glb,.svg,.gif,.mp4"
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
                    <label htmlFor="ProfileInputId">
                      <div className={classes.LabelContainer1}>
                        <img
                          src={upload_image}
                          alt="Upload"
                          id="ArtWorkImageId"
                        />
                        <span id="ArtWorkImageTextId"> Browse from device</span>
                      </div>
                    </label>
                    <input
                      className={classes.FileInput1}
                      type="file"
                      id="ProfileInputId"
                      accept=".png,.jpeg,.webp,.glb,.svg,.gif,.mp4"
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
            <button type="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
