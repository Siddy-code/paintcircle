var mouseEvent = "empty";
var lastPosition_x, lastPosition_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_line = 2;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_line = document.getElementById("width_line").value;
    radius=document.getElementById("radius").value;
       
     mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;
        console.log("last_position_of_x=" + lastPosition_x + "last_position_of_y=" + lastPosition_y);
        ctx.moveTo(lastPosition_x, lastPosition_y);

        console.log("current_position_of_mouse_x" + current_position_of_mouse_x + "current_position_of_mouse_y" + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
    lastPosition_x = current_position_of_mouse_x;
    lastPosition_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) { mouseEvent = "mouseUP"; }
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) { mouseEvent = "mouseleave"; }
var last_position_of_touch_x, last_position_of_touch_y; var width = screen.width; new_width = screen.width - 70; new_height = screen.height - 300; if (width < 992) { document.getElementById("myCanvas").width = new_width; document.getElementById("myCanvas").height = new_height; document.body.style.overflow = "hidden"; } canvas.addEventListener("touchstart", my_touchstart);



function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
