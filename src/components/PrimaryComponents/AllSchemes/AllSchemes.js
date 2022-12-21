import React from "react"
import classes from './AllSchemes.module.css'
import search from '../../../assets/images/search.png'
import filter from '../../../assets/images/filter.png'
import schemes_logo from '../../../assets/images/scheme_logo.png'
export default function AllSchemes(){
    return (
        <div className={classes.OuterContainer}>
            <div className={classes.InnerContainer}>
                <div className={classes.MainContainer}>
                    <div className={classes.UpperContainer}>
                        <div className={classes.SearchContainer}>
                            <div className={classes.SearchIconContainer}>
                                <img src={search} alt="Search"/>
                            </div>
                            <div className={classes.InputSearchContainer}>
                                <input type="text" placeholder="Search for Schemes"/>
                            </div>
                        </div>
                        <div className={classes.FilterContainer}>
                            <div className={classes.FilterText}>
                                <p>Filter</p>
                            </div>
                            <div className={classes.FilterImage}>
                                <img src={filter} alt="filter"/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.AllSchemesContainer}>
                       <div className={classes.PopularSchemesContainer}>
                         <div className={classes.PopularSchemesText}>
                            <p>Popular Schemes</p>
                         </div>
                         <div className={classes.PopularSchemesCardContainer}>
                                <div className={classes.SingleCardContainer}>
                                    <div className={classes.UpperCardContainer}>
                                        <div className={classes.SchemesLogoContainer}>
                                            <img src={schemes_logo} alt="logo"/>
                                        </div>
                                        <div className={classes.SchemesTextContainer}>
                                            <p>Prime Minister Employment Generation Programme.</p>
                                        </div>
                                    </div>
                                    <div className={classes.BelowCardContainer}>
                                        <div className={classes.DescriptionContainer}>
                                            <p>
                                                <span>Description :</span>
                                                 This scheme is implemented by khadi and Village Industries Commission Functioning as the nodal agencies at the national level.
                                            </p>
                                        </div>
                                        <div className={classes.BodyContainer}>
                                            <p>
                                                <span>Body:</span>
                                                Human Development
                                            </p>
                                        </div>
                                        <div className={classes.PriceContainer}>
                                            <p>
                                                <span>Price:</span>
                                                0.01ETH
                                            </p>
                                        </div>
                                        <div className={classes.ButtonContainer}>
                                          <button type="button">Apply</button>
                                        </div>
                                    </div>
                                    </div>
                         </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}