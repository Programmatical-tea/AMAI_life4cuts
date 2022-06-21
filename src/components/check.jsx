import React from "react";
import { NavLink } from "react-router-dom";

var sel = [0, 0, 0, 0];
var clicked = [0, 0, 0, 0, 0, 0, 0, 0];


class Check extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sel : [0,0,0,0],
            clicked : [0, 0, 0, 0, 0, 0, 0, 0],
            update : ["X","X","X","X","X","X","X","X"],
        }
    }


    decidingSelectedFew(){
        for (var i = 0; i < 8; i++) {
            if (this.state.sel[0]===i+1) { this.props.selected[i] = "1"; this.setState({update : this.props.selected}) }
            else if (this.state.sel[1]===i+1) { this.props.selected[i] = "2"; this.setState({update : this.props.selected}) }
            else if (this.state.sel[2]===i+1) { this.props.selected[i] = "3"; this.setState({update : this.props.selected}) }
            else if (this.state.sel[3]===i+1) { this.props.selected[i] = "4"; this.setState({update : this.props.selected}) }
            else { this.props.selected[i] = "X"; this.setState({update : this.props.selected}) }
        }
    }

    clickproc(i) {
        var clk = 0;
        for (var j = 0; j < 8; j++) {
            if (clicked[j]) { clk+=1; }
        }
        if (!clicked[i] && clk>=4) {
            this.decidingSelectedFew()
            return; 
        }
        if (clicked[i]) {
            clicked[i] = 0;
            if (this.state.sel[0]===i+1) { 
                this.setState(  { sel : [this.state.sel[1],this.state.sel[2],this.state.sel[3],0]  }  )
            }
            else if (this.state.sel[1]===i+1) {
                this.setState(  { sel : [this.state.sel[0],this.state.sel[2],this.state.sel[3],0]  }  )
            }
            else if (this.state.sel[2]===i+1) { 
                this.setState(  { sel : [this.state.sel[0],this.state.sel[1],this.state.sel[3],0]  }  )
            }
            else { 
                this.setState(  { sel : [this.state.sel[0],this.state.sel[1],this.state.sel[2],0]  }  )
            }
            this.decidingSelectedFew()
            return;
        }
        clicked[i] = 1;
        if (this.state.sel[0]===0) { this.setState(  { sel : [i+1,this.state.sel[1],this.state.sel[2],this.state.sel[3]]  }  ) }
        else if (this.state.sel[1]===0) { this.setState(  { sel : [this.state.sel[0],i+1,this.state.sel[2],this.state.sel[3]]  }  )  }
        else if (this.state.sel[2]===0) { this.setState(  { sel : [this.state.sel[0],this.state.sel[1],i+1,this.state.sel[3]]  }  )  }
        else if (this.state.sel[3]===0) { this.setState(  { sel : [this.state.sel[0],this.state.sel[1],this.state.sel[2],i+1]  }  )  }
        this.decidingSelectedFew()
        return;
    }

    render() {
        
        let homestyle = {
            display:"flex",
            "flex-direction":"column",
            width:"100%",
            height:"100%"
        }

        return (
            <div style={homestyle}>
              <p className="check_block" id="check_amai">#크사네컷</p>
              <p className="check_block" id="check_info">결과를 확인해주세요!</p>
              <p className="check_block" id="check_order">&nbsp;</p>
              <div id="check_photosel">
                  <div className="check_sel" id="check_sel1" onClick={this.clickproc.bind(this,0)}>
                      <p className="check_num" id="check_num1">{ this.state.update[0] }</p>
                      <img src={this.props.imageSrc[1]} className="check_cnv" id="check_cnv1" width="480px" height="270px"/>
                  </div>
                  <div className="check_sel" id="check_sel2" onClick={this.clickproc.bind(this,1)}>
                      <p className="check_num" id="check_num2">{ this.state.update[1] }</p>
                      <img src={this.props.imageSrc[2]} className="check_cnv" id="check_cnv2" width="480px" height="270px"/>
                  </div>
                  <div className="check_sel" id="check_sel3" onClick={this.clickproc.bind(this,2)}>
                      <p className="check_num" id="check_num3">{ this.state.update[2] }</p>
                      <img src={this.props.imageSrc[3]} className="check_cnv" id="check_cnv3" width="480px" height="270px"/>
                  </div>
                  <div className="check_sel" id="check_sel4" onClick={this.clickproc.bind(this,3)}>
                      <p className="check_num" id="check_num4">{ this.state.update[3] }</p>
                      <img src={this.props.imageSrc[4]} className="check_cnv" id="check_cnv4" width="480px" height="270px"/>
                  </div>
                  <div className="check_sel" id="check_sel5" onClick={this.clickproc.bind(this,4)}>
                      <p className="check_num" id="check_num5">{ this.state.update[4] }</p>
                      <img src={this.props.imageSrc[5]} className="check_cnv" id="check_cnv5" width="480px" height="270px"/>
                  </div>
                  <div className="check_sel" id="check_sel6" onClick={this.clickproc.bind(this,5)}>
                      <p className="check_num" id="check_num6">{ this.state.update[5] }</p>
                      <img src={this.props.imageSrc[6]} className="check_cnv" id="check_cnv6" width="480px" height="270px"/>
                  </div>
                  <div className="check_sel" id="check_sel7" onClick={this.clickproc.bind(this,6)}>
                      <p className="check_num" id="check_num7">{ this.state.update[6] }</p>
                      <img src={this.props.imageSrc[7]} className="check_cnv" id="check_cnv7" width="480px" height="270px"/>
                  </div>
                  <div className="check_sel" id="check_sel8" onClick={this.clickproc.bind(this,7)}>
                      <p className="check_num" id="check_num8">{ this.state.update[7] }</p>
                      <img src={this.props.imageSrc[8]} className="check_cnv" id="check_cnv8" width="480px" height="270px"/>
                  </div>
              </div>
              <div>{this.props.selected}</div>
              <div>{this.state.sel}</div>
              <div>{this.state.update}</div>
              <NavLink className="check_block" id="check_icon" to = "/process">마음에 드는 사진을 4장 선택해 주세요!</NavLink>
            </div>
        )
    }
}

export default Check