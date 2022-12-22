import React from "react";
import classes from "./AllSchemes.module.css";
import search from "../../../assets/images/search.png";
import filter from "../../../assets/images/filter.png";
import schemes_logo from "../../../assets/images/scheme_logo.png";
import { Link } from "react-router-dom";
export default function AllSchemes() {
    const AllSchemes={
    Popular:[   
        {
            id:"P01",
            schemeImage:schemes_logo,
            SchemeName:"Prime Minister Employment Generation Programme",
            schemeDescription:" The scheme is implemented by Khadi and Village Industries Commission (KVIC) functioning as the nodal agency at the national level. At the state level, the scheme is implemented through State KVIC Directorates, State Khad and Village Industries Boards (KVIBs), District Industries Centres (DICs) and banks. In such cases KVIC routes government subsidy through designated banks for eventual disbursal  to the beneficiaries / entrepreneurs directly into their bank accounts.",
            schemeBenefits:"The Prime Minister Employment Generation Programme (PMEGP) is a Government of India-backed credit-linked subsidy scheme. Under this scheme, beneficiaries can get a subsidy amounting to 15-35% of the project cost from the government.",
            schemePrice:0.01
        },
        {
            id:"P02",
            schemeImage:schemes_logo,
            SchemeName:"Prime Minister Employment Generation Programme",
            schemeDescription:" The scheme is implemented by Khadi and Village Industries Commission (KVIC) functioning as the nodal agency at the national level. At the state level, the scheme is implemented through State KVIC Directorates, State Khad and Village Industries Boards (KVIBs), District Industries Centres (DICs) and banks. In such cases KVIC routes government subsidy through designated banks for eventual disbursal  to the beneficiaries / entrepreneurs directly into their bank accounts.",
            schemeBenefits:"The Prime Minister Employment Generation Programme (PMEGP) is a Government of India-backed credit-linked subsidy scheme. Under this scheme, beneficiaries can get a subsidy amounting to 15-35% of the project cost from the government.",
            schemePrice:0.01
        },
        {
            id:"P03",
            schemeImage:schemes_logo,
            SchemeName:"Prime Minister Employment Generation Programme",
            schemeDescription:" The scheme is implemented by Khadi and Village Industries Commission (KVIC) functioning as the nodal agency at the national level. At the state level, the scheme is implemented through State KVIC Directorates, State Khad and Village Industries Boards (KVIBs), District Industries Centres (DICs) and banks. In such cases KVIC routes government subsidy through designated banks for eventual disbursal  to the beneficiaries / entrepreneurs directly into their bank accounts.",
            schemeBenefits:"The Prime Minister Employment Generation Programme (PMEGP) is a Government of India-backed credit-linked subsidy scheme. Under this scheme, beneficiaries can get a subsidy amounting to 15-35% of the project cost from the government.",
            schemePrice:0.01
        }
    
    ],
    Rural:[
        {
            id:"R01",
            schemeImage:schemes_logo,
            SchemeName:"Prime Minister Employment Generation Programme",
            schemeDescription:" The scheme is implemented by Khadi and Village Industries Commission (KVIC) functioning as the nodal agency at the national level. At the state level, the scheme is implemented through State KVIC Directorates, State Khad and Village Industries Boards (KVIBs), District Industries Centres (DICs) and banks. In such cases KVIC routes government subsidy through designated banks for eventual disbursal  to the beneficiaries / entrepreneurs directly into their bank accounts.",
            schemeBenefits:"The Prime Minister Employment Generation Programme (PMEGP) is a Government of India-backed credit-linked subsidy scheme. Under this scheme, beneficiaries can get a subsidy amounting to 15-35% of the project cost from the government.",
            schemePrice:0.01
        },
        {
            id:"R02",
            schemeImage:schemes_logo,
            SchemeName:"Prime Minister Employment Generation Programme",
            schemeDescription:" The scheme is implemented by Khadi and Village Industries Commission (KVIC) functioning as the nodal agency at the national level. At the state level, the scheme is implemented through State KVIC Directorates, State Khad and Village Industries Boards (KVIBs), District Industries Centres (DICs) and banks. In such cases KVIC routes government subsidy through designated banks for eventual disbursal  to the beneficiaries / entrepreneurs directly into their bank accounts.",
            schemeBenefits:"The Prime Minister Employment Generation Programme (PMEGP) is a Government of India-backed credit-linked subsidy scheme. Under this scheme, beneficiaries can get a subsidy amounting to 15-35% of the project cost from the government.",
            schemePrice:0.01
        },
        {
            id:"R03",
            schemeImage:schemes_logo,
            SchemeName:"Prime Minister Employment Generation Programme",
            schemeDescription:" The scheme is implemented by Khadi and Village Industries Commission (KVIC) functioning as the nodal agency at the national level. At the state level, the scheme is implemented through State KVIC Directorates, State Khad and Village Industries Boards (KVIBs), District Industries Centres (DICs) and banks. In such cases KVIC routes government subsidy through designated banks for eventual disbursal  to the beneficiaries / entrepreneurs directly into their bank accounts.",
            schemeBenefits:"The Prime Minister Employment Generation Programme (PMEGP) is a Government of India-backed credit-linked subsidy scheme. Under this scheme, beneficiaries can get a subsidy amounting to 15-35% of the project cost from the government.",
            schemePrice:0.01
        }
    ]
    }
  return (
    <div className={classes.OuterContainer}>
      <div className={classes.InnerContainer}>
        <div className={classes.MainContainer}>
          <div className={classes.UpperContainer}>
            <div className={classes.SearchContainer}>
              <div className={classes.SearchIconContainer}>
                <img src={search} alt="Search" />
              </div>
              <div className={classes.InputSearchContainer}>
                <input type="text" placeholder="Search for Schemes" />
              </div>
            </div>
            <div className={classes.FilterContainer}>
              <div className={classes.FilterText}>
                <p>Filter</p>
              </div>
              <div className={classes.FilterImage}>
                <img src={filter} alt="filter" />
              </div>
            </div>
          </div>
          <div className={classes.AllSchemesContainer}>
            <div className={classes.PopularSchemesContainer}>
              <div className={classes.PopularSchemesText}>
                <p>Popular Schemes</p>
              </div>
              <div className={classes.PopularSchemesCardContainer}>
                {
                    AllSchemes.Popular.map((schemes)=>{
                        return (
                            <div className={classes.SingleCardContainer} key={schemes.id}>
                            <div className={classes.UpperCardContainer}>
                              <div className={classes.SchemesLogoContainer}>
                                <img src={schemes.schemeImage} alt="logo" />
                              </div>
                              <div className={classes.SchemesTextContainer}>
                                <p>{schemes.SchemeName}.</p>
                              </div>
                            </div>
                            <div className={classes.BelowCardContainer}>
                              <div className={classes.BelowMajorCardContainer}>
                                <div className={classes.FirstContainer}>
                                  <div className={classes.DescriptionContainer}>
                                    <p>
                                      <span>Description :</span>
                                    </p>
                                  </div>
                                </div>
                                <div className={classes.SecondContainer}>
                                  <div className={classes.DescriptionBodyContainer}>
                                    <p>
                                      {schemes.schemeDescription.substring(0,150)}.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.BodyContainer}>
                                <p>
                                  <span>Body : </span>
                                  {schemes.schemePrice}
                                </p>
                              </div>
                              <div className={classes.PriceContainer}>
                                <p>
                                  <span>Price :</span>
                                  0.1 ETH
                                </p>
                              </div>
                              <div className={classes.ButtonContainer}>
                              <Link to="/Scheme">
                                <button type="button">Apply</button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )
                    })
                }
              </div>
            </div>
            <div className={classes.RuralSchemesContainer}>
                <div className={classes.RuralSchemesText}>
                    <p>Rural Schemes</p>
                </div>
                <div className={classes.PopularSchemesCardContainer}>
                {
                    AllSchemes.Rural.map((schemes)=>{
                        return (
                            <div className={classes.SingleCardContainer} key={schemes.id}>
                            <div className={classes.UpperCardContainer}>
                              <div className={classes.SchemesLogoContainer}>
                                <img src={schemes.schemeImage} alt="logo" />
                              </div>
                              <div className={classes.SchemesTextContainer}>
                                <p>{schemes.SchemeName}.</p>
                              </div>
                            </div>
                            <div className={classes.BelowCardContainer}>
                              <div className={classes.BelowMajorCardContainer}>
                                <div className={classes.FirstContainer}>
                                  <div className={classes.DescriptionContainer}>
                                    <p>
                                      <span>Description :</span>
                                    </p>
                                  </div>
                                </div>
                                <div className={classes.SecondContainer}>
                                  <div className={classes.DescriptionBodyContainer}>
                                    <p>
                                    {schemes.schemeDescription.substring(0,150)}.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.BodyContainer}>
                                <p>
                                  <span>Body : </span>
                                  {schemes.schemePrice}
                                </p>
                              </div>
                              <div className={classes.PriceContainer}>
                                <p>
                                  <span>Price :</span>
                                  0.1 ETH
                                </p>
                              </div>
                           
                              <div className={classes.ButtonContainer}>
                              <Link to="/Scheme">
                                <button type="button">Apply</button>
                                </Link>
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
    </div>
  );
}
