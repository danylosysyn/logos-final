import React from "react";
import { useState } from "react";
import "./MainPage.modules.css";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground.jsx"

let initialInfo = {
    name: "Danylo",
    surname: "S",
    city: "Lviv",
    country: "Ukraine",
    job: "Frontend Developer",
    extraInfo: "Here is my CV",
}


const MainPage = () => {
    return(
        <div id="pageDiv">
            <AnimatedBackground content = {<InfoDiv />}/>
        </div>
    )
}

export default MainPage

const InfoDiv = () => {
    const [userInfo, setUserInfo] = useState(initialInfo)

    return(
        <div>
            <p id="nameText">{userInfo.name} {userInfo.surname}</p>
            <h3>{userInfo.city},{userInfo.country}</h3>
            <h3>{userInfo.job}</h3>
            <h2 style={{fontWeight: 600}}> About me:</h2>
            <p id="myInfoText">{userInfo.extraInfo}</p>
        </div>
    )
}