import React from "react"
import classes from './AboutUs.module.css'
export default function AboutUs(){
    const data=[
        {
            question:"What is Kaam-Asaan?",
            answer:"Kaam-Asaan is a web application where people of India can apply for various government schemes. It is a one-stop decentralized platform for hosting various government schemes."
        },
        {
            question:"Why Kaam-Asaan?",
            answer:"Consider a situation where first you have to apply for a government scheme via online or offline and taking the printout of the application and going to the government offices to get it approved. That's not over now, after applying you do not have any source of which official is handled over your scheme, then you again visit government offices to just check about the status of your scheme. Too frustating right? Well thats how Kaam-Asaan solves this issue, you apply to a scheme, a officer get allocated to your scheme which you can see in your profile, you can check the track record of the official. Since its a decentralized application, you are your own boss.No one has any right to alter your data or any other data."
        },
        {
            question:"Data is Everything?",
            answer:"In todays era data is everything from an organization perspective, so its your responsibility to limit the use of your data on different platforms and also there can be a situation where a user might alter your data and fake it to anyone. In blockchain you can alter the transactions and talking about your data in IPFS, so you cannot alter that too. This is the reason Kaam-Asaan is a decentralized portal."
        },
        {
            question:"What is accountability?",
            answer:"The word accountability is often used in the context of individuals, especially in the term personal accountability. It is also commonly used in the context of institutions or people that are responsible to the public, such as the government, its agencies, politicians, and the media. Accountability is often discussed with transparency and consequences. This typically involves keeping people and organizations accountable by making their actions visible and having consequences when those actions are not acceptable. Most government officials do not do their work properly and on-time that means they are less accountable toward the work that has been given to them just because no one is there to cross check at the end of the day how much work they have done, this is the reason why we have introduced the stats section in each government official profile."
        }
    ]
    return(
        <div className={classes.OuterContainer}>
            <div className={classes.InnerContainer}>
                <div className={classes.MainContainer}>
                    <div className={classes.IntroSection}>
                      {
                        data.map((data)=>{
                            return(
                                <div className={classes.SingleIntro}>
                                <div className={classes.QuestionContainer}>
                                    <p>{data.question}</p>
                                </div>
                                <div className={classes.AnswerContainer}>
                                    <p>{data.answer}</p>
                                </div>
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