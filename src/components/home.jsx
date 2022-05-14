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
        <p className="block" id="amai">AMAI</p>
        <p className="leftblock" id="name1">크사</p>
        <p className="block" id="icon">📸</p>
        <p className="rightblock" id="name2">네컷</p>
        <NavLink className="block" id="start" to ="/start">화면을 터치하세요 *DesignToBeChanged</NavLink>
      </div>
    )
}

export default Home