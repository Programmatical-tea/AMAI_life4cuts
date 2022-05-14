import React from "react";
import { NavLink } from "react-router-dom";

  
function Home() {
    let homestyle = {
        display:"flex",
        "flex-direction":"column",
        width:"100%",
        height:"100%"
    }

    return (
      <div style={homestyle}>
        <p class="block" id="amai">#크사네컷</p>
        <p class="block" id="info">출력하는 중입니다!</p>
        <p class="block" id="order">&nbsp;</p>
        <div class="block" id="text">
            곧 아래에서<br />
            사진이 출력됩니다!<br />
            잠시만 기다려주세요 :)
        </div>
        <canvas class="leftblock" id="cnv" width="200px" height="600px"></canvas>
      </div>
    )
}

export default Home