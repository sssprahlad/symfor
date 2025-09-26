
import React from "react"
import "./Home.css"
import { PiBowlFoodLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { CiPlay1 } from "react-icons/ci";

const Home = () => {


    return(
        <div>
         
            <div className="card-container">
                <div className="left-part">
                    <div className="hot-recipe-btn">
                        <PiBowlFoodLight/>
                        Hot Recipes
                    </div>
                    <div className="text-cont">
                    <h1>Spicy delicious <br/> chicken wings</h1>
                    <p className="description">leard  kjhe woeijo qoijhdioqwjed ioqjhhq <br/> iowd qoih doiqewh ehd ehnfqwe oihdkqhf oijhodeqwdh</p>
                    </div>
                    <div className="buttons-container">
                        <div className="button">
                            <CiClock2/>
                            <p>30 Minutes</p>
                        </div>
                        <div className="button">
                            <GiForkKnifeSpoon/>
                            <p>Chicken</p>
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <div className="person-details">
                            <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" className="person-img"/>
                            <div className="user-details">
                                <h3>John Smith</h3>
                                <p>15 Merch 2022</p>
                            </div>
                        </div>
                        <div className="view-recipes">
                                View Recipes
                                <CiPlay1/>
                        </div>
                    </div>
                </div>
                <div className="right-part">
                    <img src="https://t4.ftcdn.net/jpg/06/09/35/79/240_F_609357995_9f5MTF73kiu6UYAtpJZRT9BFWet4l3fX.jpg" alt="img" className="right-img"/>
                </div>
            </div>
        </div>
    )
}

export default Home;