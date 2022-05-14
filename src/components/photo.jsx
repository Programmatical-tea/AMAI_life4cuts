import React from "react";
import { NavLink } from "react-router-dom";

let homestyle = {
    display:"flex",
    "flex-direction":"column",
    width:"100%",
    height:"100%"
}

class Photo extends React.Component {
    constructor(props){
        super(props);
        this.state = {t:20};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick() ,
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (this.state.t > 0){
            this.setState({t : this.state.t-1});
        }
    }

    render() {
        return (
            <div style={homestyle}>
                <p class="photo_block" id="photo_amai">#크사네컷</p>
                <p class="photo_block" id="photo_info">카메라를 봐주세요!</p>
                <p class="photo_block" id="photo_order">1 / 8</p>
                <canvas class="photo_block" id="photo_cnv" width="960px" height="540px"></canvas>
                <p class="photo_block" id="photo_icon">{this.state.t}</p>
            </div>
        );
    }
}

export default Photo