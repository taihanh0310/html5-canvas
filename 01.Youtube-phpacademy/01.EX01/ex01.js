var canvas = document.getElementById('canvas');

//Khai bao var context de chua noi dung
var context = canvas.getContext('2d');

var radius = 10;
//load width window
canvas.width = window.innerWidth;

//get hight window
canvas.height = window.innerHeight;

//add listen event

var putPaint = function(e) {

	//Begins a path, or resets the current path
	context.beginPath();
	//arc: tạo ra một vòng cung hoặc một vòng tròn

	//do mau vao fill
	context.fillStyle="#FF0000";

	context.arc(e.offsetX,e.offsetY,radius,0,2*Math.PI);

	//Ve nuoc nhung buc hinh khi hinh anh co dinh
	//context.stroke();

	//Fills the current drawing (path) -- dien vao cac noi dung trong

	context.fill()
}


//call event
canvas.addEventListener('mousedown',putPaint);