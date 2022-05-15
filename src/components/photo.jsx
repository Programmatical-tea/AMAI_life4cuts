import React from "react";
import { Navigate } from "react-router-dom";

let homestyle = {
    display:"flex",
    "flex-direction":"column",
    width:"100%",
    height:"100%"
}

class Photo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            t:5,
            pic:1,
            shouldRedirect:0
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick() ,
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        this.setState({
            shouldRedirect : 0
        });
    }

    tick() {
        if (this.state.t > 0){
            this.setState({
                t : this.state.t-1,
                pic:this.state.pic
            });
        }
        else{
            this.setState({
                t : 20, 
                pic:this.state.pic + 1
            });
        }
        if (this.state.pic > 1){
            this.setState({
                shouldRedirect : 1
            });
        }
    }

    render() {
        return (
            <div style={homestyle}>
                <p class="photo_block" id="photo_amai">#크사네컷</p>
                <p class="photo_block" id="photo_info">카메라를 봐주세요!</p>
                <p class="photo_block" id="photo_order">{this.state.pic} / 8</p>
                <canvas class="photo_block" id="photo_cnv" width="960px" height="540px"></canvas>
                <p class="photo_block" id="photo_icon">{this.state.t}</p>
                {this.state.shouldRedirect && <Navigate to='/check' />}
            </div>
        );
    }
}

export default Photo