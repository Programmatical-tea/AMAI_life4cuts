import React from "react";
import { NavLink } from "react-router-dom";


  
function Start() {
    let homestyle = {
        display:"flex",
        "flex-direction":"column",
        width:"100%",
        height:"100%"
      }

    return (
      <div style={homestyle}>
        <p class="start_block" id="start_amai">#크사네컷</p>
        <p class="start_block" id="start_info">준비되면 시작해주세요!</p>
        <p class="start_block" id="start_order">&nbsp;</p>
        <canvas class="start_block" width="960px" height="540px" id="start_cnv"></canvas>
        <p class="start_block" id="start_icon">
            <NavLink to = '/photo'>📸</NavLink>
        </p>
      </div>
    )
}

export default Start