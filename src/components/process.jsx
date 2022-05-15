import React from "react";
import { NavLink } from "react-router-dom";

  
function Process() {
    let homestyle = {
        display:"flex",
        "flex-direction":"column",
        width:"100%",
        height:"100%"
    }

    return (
      <div style={homestyle}>
        <p class="ps_block" id="ps_amai">#크사네컷</p>
        <p class="ps_block" id="ps_info">출력하는 중입니다!</p>
        <p class="ps_block" id="ps_order">&nbsp;</p>
        <div class="ps_block" id="ps_text">
            곧 아래에서<br />
            사진이 출력됩니다!<br />
            잠시만 기다려주세요 :)
        </div>
        <canvas class="ps_leftblock" id="ps_cnv" width="200px" height="600px"></canvas>
      </div>
    )
}

export default Process