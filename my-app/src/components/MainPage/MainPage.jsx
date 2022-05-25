import React from "react";
import { useState, useEffect } from "react";
import "./MainPage.modules.css";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground.jsx"
import "../../firebase/firebase"
import db from "../../firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore"


const FetchData = async () => {
    let updatedInfo
    useEffect(FetchData, [db])
    const docRef = doc(db, "user", "0AUUjjMKkiyYjZIgzFtT")
    console.log("response", docRef)
    onSnapshot(docRef, (doc) => {
        console.log(doc.data())
        updatedInfo = doc.data()
    })
    console.log(updatedInfo)
    return updatedInfo
}


export let UserInfo = () => {
    let defaultInfo = {
        name: "Name",
        surname: "Surname",
        city: "Lviv",
        country: "Ukraine",
        job: "Frontend Developer",
        extraInfo: "Here is my CV",
        isLogged: false,
    }

    return (defaultInfo)
}


const MainPage = () => {
    return (
        <div id="pageDiv">
            <AnimatedBackground content={<InfoDiv />} />
        </div>
    )
}

export default MainPage

const InfoDiv = () => {
    const [userInfo, setUserInfo] = useState(UserInfo)

    return (
        <div>
            <p id="nameText">{userInfo.name} {userInfo.surname}</p>
            <h3>{userInfo.city},{userInfo.country}</h3>
            <h3>{userInfo.job}</h3>
            <h2 style={{ fontWeight: 600 }}> About me:</h2>
            <p id="myInfoText">{userInfo.extraInfo}</p>
        </div>
    )
}