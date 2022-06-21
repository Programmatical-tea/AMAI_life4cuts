import React from "react";
import { Navigate } from "react-router-dom";
import Webcam from "react-webcam";

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
            t:3,
            pic:1,
            shouldRedirect:0,
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick() ,
            1000
        );
        while(this.props.imageSrc[0]){
            this.props.imageSrc.pop()
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        this.setState({
            t:3,
            pic:1,
            shouldRedirect : 0
        });
        
    }

    tick() {

        if (this.state.pic > 8){
            this.setState({
                shouldRedirect : 1
            });
        }
        if (this.state.t > 0){
            this.setState({
                t : this.state.t-1,
                pic:this.state.pic
            });
        }
        else{
            this.setState({
                t : 1, 
                pic:this.state.pic + 1
            });
        }
    }

    render() {
        
        const videoConstraints = {
            width: 1000,
            height: 540,
            facingMode: "user"
        }
        
        return (
            <div style={homestyle}>
                <p className="photo_block" id="photo_amai">#크사네컷</p>
                <p className="photo_block" id="photo_info">카메라를 봐주세요!</p>
                <p className="photo_block" id="photo_order">{this.state.pic} / 8</p>
                <div>
                    <Webcam
                        audio={false}
                        width={1000}
                        height={540}
                        screenshotFormat="image/jpeg"
                        videoConstraints = {videoConstraints}
                    >
                    {({ getScreenshot }) => { if(this.state.t === 0) { if (!this.props.imageSrc[this.state.pic]) { this.props.imageSrc.push( getScreenshot() ) } } }}
                    </Webcam>
                </div>
                <p className="photo_block" id="photo_icon">{this.state.t}</p>
                {this.state.shouldRedirect && <Navigate to='/check' />}
            </div>
        );
    }
}

export default Photo