import React from "react";
import { useState, useEffect } from "react";
import "./MainPage.modules.css";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground.jsx"
import "../../firebase/firebase"
import { useDispatch, useSelector } from "react-redux";
import { selectInfo } from "../../redux/selectors/selectInfo"
import { getInfo } from "../../redux/actions/infoActions";


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
    const getInfoThunk = () => dispatch(getInfo());
    useEffect(() => {
        getInfoThunk();
    }, [dispatch]);
    const info = useSelector(selectInfo);
    return (
        <div id="wholeDiv">
            <div id="infoDiv">
                <div id="myInfo">
                    <p id="nameText">{info?.name} {info?.surname}</p>
                    <h3>{info?.city}, {info?.country}</h3>
                    <h3>{info?.job}</h3>
                </div>
                <div id="imageDiv">
                    <img src={info?.image} alt="Loading..." />
                </div>
            </div>
            <div id="secondInfoDiv">
                <h2 style={{ fontWeight: 600 }}> About me:</h2>
                <p id="myInfoText" style={{whiteSpace: "pre-line"}}>{info?.extraInfo}</p>
            </div>
        </div>
    )
}