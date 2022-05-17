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
        <p className="ps_block" id="ps_amai">#크사네컷</p>
        <div className="wrapper">
            <div className="left">
                <p className="ps_block" id="ps_info">출력하는 중입니다!</p>
                <div className="ps_block" id="ps_text">
                    곧 아래에서<br/>
                    사진이 출력됩니다!<br/>
                    잠시만 기다려주세요 :)
                </div>
            </div>
            <canvas className="ps_leftblock" id="ps_cnv" width="600px" height="900px"></canvas>
        </div>
      </div>
    )
}

export default Process