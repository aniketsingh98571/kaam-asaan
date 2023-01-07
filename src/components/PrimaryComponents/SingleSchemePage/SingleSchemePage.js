import React from "react";
import classes from "./SingleSchemePage.module.css";
import scheme_logo from "../../../assets/images/scheme_logo.png";
import arrow from "../../../assets/images/top_arrow.png";
import { Link } from "react-router-dom";
import { FORM,ALL_SCHEMES } from "../../../URL";
export default function SingleSchemePage() {
  return (
    <div className={classes.OuterContainer}>
      <div className={classes.InnerContainer}>
        <div className={classes.MainContainer}>
          <div className={classes.BackSchemesContainer}>
            <Link style={{textDecoration:"none"}} to={ALL_SCHEMES}>
            <button>
              <img src={arrow} alt="arrow" />
              Go back to all Schemes
            </button>
            </Link>
          </div>
          <div className={classes.SingleScheme}>
            <div className={classes.SchemeLogoContainer}>
              <img src={scheme_logo} alt="logo" />
            </div>
            <div className={classes.InfoContainer}>
              <div className={classes.SchemeNameContainer}>
                <p>Prime Minister Employment Generation Programme</p>
              </div>
              <div className={classes.BodyNameContainer}>
                <p>Khadi and Village Industries Commission</p>
              </div>
              <div className={classes.MainInfoContainer}>
                <div className={classes.DescriptionFlexContainer}>
                  <div className={classes.DescriptionText}>
                    <p>Description : </p>
                  </div>
                  <div className={classes.DescriptionBody}>
                    <p>
                      The scheme is implemented by Khadi and Village Industries
                      Commission (KVIC) functioning as the nodal agency at the
                      national level. At the state level, the scheme is
                      implemented through State KVIC Directorates, State Khadi
                      and Village Industries Boards (KVIBs), District Industries
                      Centres (DICs) and banks. In such cases KVIC routes
                      government subsidy through designated banks for eventual
                      disbursal to the beneficiaries / entrepreneurs directly
                      into their bank accounts.
                    </p>
                  </div>
                </div>
                <div className={classes.PriceFlexContainer}>
                  <div className={classes.PriceText}>
                    <p>Price : </p>
                  </div>
                  <div className={classes.PriceBody}>
                    <p>0.01 ETH</p>
                  </div>
                </div>
                <div className={classes.BenefitsFlexContainer}>
                  <div className={classes.BenefitsText}>
                    <p>Benefits : </p>
                  </div>
                  <div className={classes.BenefitsBody}>
                    <p>
                      The Prime Minister Employment Generation Programme (PMEGP)
                      is a Government of India-backed credit-linked subsidy
                      scheme. Under this scheme, beneficiaries can get a subsidy
                      amounting to 15-35% of the project cost from the
                      government
                    </p>
                  </div>
                </div>
                <div className={classes.MoreDetailsContainer}>
                  <p>
                    For More Details <a href="/">Click Here</a>
                  </p>
                </div>
                <div className={classes.ButtonContainer}>
                  <Link to={FORM}>
                  <button type="button">Apply Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
