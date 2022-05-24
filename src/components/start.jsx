import React from "react";
import { NavLink } from "react-router-dom";
import Webcam from "react-webcam";

 
function Start() {


    const videoConstraints = {
      width: 1000,
      height: 540,
      facingMode: "enviroment"
    }

    let homestyle = {
        display:"flex",
        "flex-direction":"column",
        width:"100%",
        height:"100%"
      }

    return (
      <div style={homestyle}>
        <p className="start_block" id="start_amai">#크사네컷</p>
        <p className="start_block" id="start_info">준비되면 시작해주세요!</p>
        <p className="start_block" id="start_order">&nbsp;</p>
        <div className = "start_webcam">
          <Webcam
            audio={false}
            width={1000}
            height={540}
            screenshotFormat="image/jpeg"
            videoConstraints = {videoConstraints}
          />
        </div>
        <p className="start_block" id="start_icon">
            <NavLink to = '/photo'>📸</NavLink>
        </p>
      </div>
    )
}

export default Start