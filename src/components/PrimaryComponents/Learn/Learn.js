import React from "react"
import classes from './Learn.module.css'
export default function Learn(){
    const youtubeURL=["https://www.youtube.com/embed/kHybf1aC-jE","https://www.youtube.com/embed/YVgfHZMFFFQ","https://www.youtube.com/embed/nHhAEkG1y2U","https://www.youtube.com/embed/pyaIppMhuic","https://www.youtube.com/embed/afATAw7iuUM","https://www.youtube.com/embed/B8CbDQQyBV8"]
    return(
        <div className={classes.OuterContainer}>
            <div className={classes.InnerContainer}>
                <div className={classes.MainContainer}>
                <div className={classes.YoutubeContainer}>
                    {
                        youtubeURL.map((URL)=>{
                            return(
                                <div className={classes.SingleVideo}>
                                       <iframe width="660" height="315" src={URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            )
                        })
                    }
             
                </div>
                </div>
            </div>
        </div>
    )
}