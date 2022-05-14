var elems = [document.getElementById("num1"),
    document.getElementById("num2"),
    document.getElementById("num3"),
    document.getElementById("num4"),
    document.getElementById("num5"),
    document.getElementById("num6"),
    document.getElementById("num7"),
    document.getElementById("num8")]
var sel = [0, 0, 0, 0];
var clicked = [false, false, false, false, false, false, false, false];
function update() {
    for (i = 0; i < 8; i++) {
        if (sel[0]==i+1) { elems[i].innerHTML="1"; }
        else if (sel[1]==i+1) { elems[i].innerHTML="2"; }
        else if (sel[2]==i+1) { elems[i].innerHTML="3"; }
        else if (sel[3]==i+1) { elems[i].innerHTML="4"; }
        else { elems[i].innerHTML=""; }
    }
}
update();
function clickproc(i) {
    console.log(i);
    var clk = 0;
    for (j = 0; j < 8; j++) {
        if (clicked[j]) { clk+=1; }
    }
    if (!clicked[i] && clk>=4) { return; }
    if (clicked[i]) {
        clicked[i] = false;
        if (sel[0]==i+1) { sel[0]=sel[1];sel[1]=sel[2];sel[2]=sel[3];sel[3]=0; }
        else if (sel[1]==i+1) { sel[1]=sel[2];sel[2]=sel[3];sel[3]=0; }
        else if (sel[2]==i+1) { sel[2]=sel[3];sel[3]=0; }
        else { sel[3]=0; }
        update();
        return;
    }
    clicked[i] = true;
    if (sel[0]==0) { sel[0]=i+1; }
    else if (sel[1]==0) { sel[1]=i+1; }
    else if (sel[2]==0) { sel[2]=i+1; }
    else if (sel[3]==0) { sel[3]=i+1; }
    update();
    return;
}