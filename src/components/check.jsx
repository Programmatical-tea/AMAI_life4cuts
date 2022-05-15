import React from "react";
import { NavLink } from "react-router-dom";

  
function Check() {
    let homestyle = {
        display:"flex",
        "flex-direction":"column",
        width:"100%",
        height:"100%"
    }

    return (
      <div style={homestyle}>
        <p class="check_block" id="check_amai">#크사네컷</p>
        <p class="check_block" id="check_info">결과를 확인해주세요!</p>
        <p class="check_block" id="check_order">&nbsp;</p>
        <div id="photocheck_sel">
            <div class="check_sel" id="check_sel1" onclick="clickproc(0);">
                <p class="check_num" id="check_num1">1</p>
                <canvas class="check_cnv" id="check_cnv1" width="480px" height="270px"></canvas>
            </div>
            <div class="check_sel" id="check_sel2" onclick="clickproc(1);">
                <p class="check_num" id="check_num2">2</p>
                <canvas class="check_cnv" id="check_cnv2" width="480px" height="270px"></canvas>
            </div>
            <div class="check_sel" id="check_sel3" onclick="clickproc(2);">
                <p class="check_num" id="check_num3">3</p>
                <canvas class="check_cnv" id="check_cnv3" width="480px" height="270px"></canvas>
            </div>
            <div class="check_sel" id="check_sel4" onclick="clickproc(3);">
                <p class="check_num" id="check_num4">4</p>
                <canvas class="check_cnv" id="check_cnv4" width="480px" height="270px"></canvas>
            </div>
            <div class="check_sel" id="check_sel5" onclick="clickproc(4);">
                <p class="check_num" id="check_num5">5</p>
                <canvas class="check_cnv" id="check_cnv5" width="480px" height="270px"></canvas>
            </div>
            <div class="check_sel" id="check_sel6" onclick="clickproc(5);">
                <p class="check_num" id="check_num6">6</p>
                <canvas class="check_cnv" id="check_cnv6" width="480px" height="270px"></canvas>
            </div>
            <div class="check_sel" id="check_sel7" onclick="clickproc(6);">
                <p class="check_num" id="check_num7">7</p>
                <canvas class="check_cnv" id="check_cnv7" width="480px" height="270px"></canvas>
            </div>
            <div class="check_sel" id="check_sel8" onclick="clickproc(7);">
                <p class="check_num" id="check_num8">8</p>
                <canvas class="check_cnv" id="check_cnv8" width="480px" height="270px"></canvas>
            </div>
        </div>
        <script src="js/check.js"></script>
        <p class="check_block" id="check_icon">마음에 드는 사진을 4장 선택해 주세요!</p>
      </div>
    )
}

export default Check