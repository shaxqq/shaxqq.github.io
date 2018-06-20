var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');
var color = 'black';
var clear = document.getElementById('clear');

document.getElementById('color').oninput = function (){
    color = this.value;
}



canvas.onmousedown = function (event) {
    canvas.onmousemove = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;
        ctx.fillRect(x-5, y-5, 5, 5);
        ctx.fillStyle = color;
        ctx.fill();
        
        }
    
    canvas.onmouseup = function () {
        canvas.onmousemove = null;
    }
    
}
canvas.onmouseclick = function (event) {
    clear = ctx.clearRect(0, 0, 1000, 500);
}



