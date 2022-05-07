import React from "react";
import { useState } from "react";
import "./MainPage.modules.css";
import AnimatedBackground from "./AnimatedBackground/AnimatedBackground.jsx"

let initialInfo = {
    name: "Danylo",
    age: 16,
    job: "Frontend Developer",
    extraInfo: "Hello",
}


const MainPage = () => {
    return(
        <div id="pageDiv">
            <AnimatedBackground infoDiv = {<InfoDiv />}/>
        </div>
    )
}

export default MainPage

export const InfoDiv = () => {
    const [userInfo, setUserInfo] = useState(initialInfo)

    return(
        <div>
            <h2>{userInfo.name}</h2>
            <p>Here is my CV</p>
        </div>
    )
}