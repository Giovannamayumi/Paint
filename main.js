var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var upx, upy;
var color = "black";
var llinha = 2;
var lt = screen.width;
var nl = screen.width - 100;
var na = screen.height - 300;

if (lt < 992) {
    document.getElementById("myCanvas").width = nl;
    document.getElementById("myCanvas").height = na;
    document.body.style.overflow = "hidden";


}
canvas.addEventListener("touchstart", start);
function start(e) {
    upx = e.touches[0].clientX - canvas.offsetLeft;
    upy = e.touches[0].clientY - canvas.offsetTop;

}
canvas.addEventListener("touchmove", move);
function move(e) {
    px = e.touches[0].clientX - canvas.offsetLeft;
    py = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = llinha;
    ctx.moveTo(upx, upy);
    ctx.lineTo(px, py);
    ctx.stroke();
    upx = px;
    upy = py;
}