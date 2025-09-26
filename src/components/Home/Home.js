
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
            <div className="category-container">
                <h1 style={{}}>Categories</h1>
                <div style={{display:"flex", gap:"20px", marginTop:"20px"}}>
                    <div>
                        <img src="./images/breakfast.jpg" alt="img" className="category-img"/>
                        <p>Breakfast</p>
                    </div>
                    <div>
                        <img src="./images/chocolate.jpg" alt="img" className="category-img"/>
                        <p>chocolate</p>
                    </div>
                    <div>
                        <img src="./images/chicken-manchurian.jpg" alt="img" className="category-img"/>
                        <p>Chickeen manchurian</p>
                    </div>
                    <div>
                        <img src="./images/lunch.jpg" alt="img" className="category-img"/>
                        <p>Lunch</p>
                    </div>
                    <div>
                        <img src="./images/meat.jpg" alt="img" className="category-img"/>
                        <p>Meat</p>
                    </div>
                    <div>
                        <img src="./images/vegan.jpg" alt="img" className="category-img"/>
                        <p>Vegan</p>
                    </div>
                </div>
            </div>
            <div className="sample-container">
                <h1>Simple and tasty recipes</h1>
                <p> jkefqe lehfowf liehfqndf lwehfoihwqofi weihfiohfe wedfhwoaih</p>
            </div>
            <div style={{display:"flex", gap:"20px", marginTop:"20px"}}>
                    <div>
                        <img src="./images/breakfast.jpg" alt="img" className="category-img"/>
                        <p>Breakfast</p>
                    </div>
                    <div>
                        <img src="./images/chocolate.jpg" alt="img" className="category-img"/>
                        <p>chocolate</p>
                    </div>
                    <div>
                        <img src="./images/chicken-manchurian.jpg" alt="img" className="category-img"/>
                        <p>Chickeen manchurian</p>
                    </div>
                    <div>
                        <img src="./images/lunch.jpg" alt="img" className="category-img"/>
                        <p>Lunch</p>
                    </div>
                    <div>
                        <img src="./images/meat.jpg" alt="img" className="category-img"/>
                        <p>Meat</p>
                    </div>
                    <div>
                        <img src="./images/vegan.jpg" alt="img" className="category-img"/>
                        <p>Vegan</p>
                    </div>
                </div>
            
                <div style={{display:"flex", gap:"20px", marginTop:"20px"}}>
                    <div>
                        <img src="./images/breakfast.jpg" alt="img" className="category-img"/>
                        <p>Breakfast</p>
                    </div>
                    <div>
                        <img src="./images/chocolate.jpg" alt="img" className="category-img"/>
                        <p>chocolate</p>
                    </div>
                    <div>
                        <img src="./images/chicken-manchurian.jpg" alt="img" className="category-img"/>
                        <p>Chickeen manchurian</p>
                    </div>
                    <div>
                        <img src="./images/lunch.jpg" alt="img" className="category-img"/>
                        <p>Lunch</p>
                    </div>
                    <div>
                        <img src="./images/meat.jpg" alt="img" className="category-img"/>
                        <p>Meat</p>
                    </div>
                    <div>
                        <img src="./images/vegan.jpg" alt="img" className="category-img"/>
                        <p>Vegan</p>
                    </div>
                </div>

                <div className="card-container">
                <div className="right-part">
                    <img src="https://t4.ftcdn.net/jpg/06/09/35/79/240_F_609357995_9f5MTF73kiu6UYAtpJZRT9BFWet4l3fX.jpg" alt="img" className="right-img"/>
                </div>

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
                
            </div>

            <div className="sample-container">
                <h1>Checkout  @foodieland on Instagram</h1>
                <p> jkefqe lehfowf liehfqndf lwehfoihwqofi weihfiohfe wedfhwoaih</p>
            </div>
            <div style={{display:"flex", gap:"20px", marginTop:"20px"}}>
                    <div>
                        <img src="./images/breakfast.jpg" alt="img" className="category-img"/>
                        <p>Breakfast</p>
                    </div>
                    <div>
                        <img src="./images/chocolate.jpg" alt="img" className="category-img"/>
                        <p>chocolate</p>
                    </div>
                    <div>
                        <img src="./images/chicken-manchurian.jpg" alt="img" className="category-img"/>
                        <p>Chickeen manchurian</p>
                    </div>
                    <div>
                        <img src="./images/lunch.jpg" alt="img" className="category-img"/>
                        <p>Lunch</p>
                    </div>
                    <div>
                        <img src="./images/meat.jpg" alt="img" className="category-img"/>
                        <p>Meat</p>
                    </div>
                    <div>
                        <img src="./images/vegan.jpg" alt="img" className="category-img"/>
                        <p>Vegan</p>
                    </div>
                    
                </div>
                <div style={{display:"flex", gap:"20px", marginTop:"20px"}}>
                    <div>
                        <img src="./images/breakfast.jpg" alt="img" className="category-img"/>
                        <p>Breakfast</p>
                    </div>
                    <div>
                        <img src="./images/chocolate.jpg" alt="img" className="category-img"/>
                        <p>chocolate</p>
                    </div>
                    <div>
                        <img src="./images/chicken-manchurian.jpg" alt="img" className="category-img"/>
                        <p>Chickeen manchurian</p>
                    </div>
                    <div>
                        <img src="./images/lunch.jpg" alt="img" className="category-img"/>
                        <p>Lunch</p>
                    </div>
                    <div>
                        <img src="./images/meat.jpg" alt="img" className="category-img"/>
                        <p>Meat</p>
                    </div>
                    <div>
                        <img src="./images/vegan.jpg" alt="img" className="category-img"/>
                        <p>Vegan</p>
                    </div>

                    
                </div>
                <div style={{display:"flex", gap:"20px", marginTop:"20px"}}>
                    <div>
                        <img src="./images/breakfast.jpg" alt="img" className="category-img"/>
                        <p>Breakfast</p>
                    </div>
                    <div>
                        <img src="./images/chocolate.jpg" alt="img" className="category-img"/>
                        <p>chocolate</p>
                    </div>
                    <div>
                        <img src="./images/chicken-manchurian.jpg" alt="img" className="category-img"/>
                        <p>Chickeen manchurian</p>
                    </div>
                    <div>
                        <img src="./images/lunch.jpg" alt="img" className="category-img"/>
                        <p>Lunch</p>
                    </div>
                    <div>
                        <img src="./images/meat.jpg" alt="img" className="category-img"/>
                        <p>Meat</p>
                    </div>
                    <div>
                        <img src="./images/vegan.jpg" alt="img" className="category-img"/>
                        <p>Vegan</p>
                    </div>
                    
                </div>
        </div>
    )
}

export default Home;