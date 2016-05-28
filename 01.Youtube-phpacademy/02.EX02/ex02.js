var canvas = document.getElementById('canvas');
var color = document.getElementById('color').value;

var context = canvas.getContext('2d');

var radius = 10;

var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2;

var putPoint = function (e) {

	//kiem tra xem da ve duoc chua
	if (dragging) {

		context.lineTo(e.clientX, e.clientY);

		//ve lai hinh
		context.strokeStyle = '#8ED6FF';
		context.stroke();
		//bat dau ve lai 
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);

		context.fillStyle = '#8ED6FF';
		context.fill();

		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
	
}

var engage = function(e){
	dragging = true;

	putPoint(e);
}

var disengage = function(e){
	dragging = false;
	//su kien sau khi dung chuot va nhac len thi tien hanh ve lai diem khac
	context.beginPath();
}

canvas.addEventListener('mousedown', engage);

canvas.addEventListener('mouseup', disengage);

canvas.addEventListener('mousemove', putPoint);