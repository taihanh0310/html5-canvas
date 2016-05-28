// JavaScript source code
var setRadius = function (newRadius) {
    if (newRadius < minRad) {
        newRadius = minRad;
    }
    else if (newRadius > maxRad) {
        newRadius = maxRad;
    }
    radius = newRadius;
    context.lineWidth = radius * 2;

    radSpan.innerHTML = radius;
}

var radSpan = document.getElementById('radval'),
    minRad = 0.5,
    maxRad = 100,
    inteval = 5,
    defaultRad = 20,
    decRad = document.getElementById('decrad'),
    incRad = document.getElementById('incrad');

//add su kien cho nhap chuot len
decRad.addEventListener('click', function () {
    setRadius(radius - inteval);
});

incRad.addEventListener('click', function () {
    setRadius(radius + inteval);
});

setRadius(defaultRad);