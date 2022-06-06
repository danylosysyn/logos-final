import React from "react";
import { useState, useEffect } from "react";
import "./MainPage.modules.css";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground.jsx"
import "../../firebase/firebase"
import db from "../../firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore"
import { useDispatch, useSelector } from "react-redux";


// export const DataFetch = () => {
//     return dispatch => {
//         const docRef = doc(db, "user", "0AUUjjMKkiyYjZIgzFtT")
//         const setData = (payload) => ({ type: "SET_DATA", payload })
//         onSnapshot(docRef, (doc) => {
//             console.log(doc.data())
//             dispatch(setData(doc.data()))
//         })
//     }
// }


export const getMyInfo = (dispatch) => {
    const docRef = doc(db, "user", "0AUUjjMKkiyYjZIgzFtT")
    const setData = (info) => ({ type: "SET_DATA", info })
    onSnapshot(docRef, (doc) => {
        console.log(doc.data())
        return dispatch(setData(doc.data()))
    })
};

export const getInfo = (dispatch) => {
    getMyInfo(dispatch);
}



export const UserInfo = () => {
    return useSelector(state => state);
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
    const dispatch = useDispatch();
    useEffect(() => {getInfo()}, [dispatch])
    const info = useSelector((state) => state)
    const [userInfo, setUserInfo] = useState(info)
    console.log(info)
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