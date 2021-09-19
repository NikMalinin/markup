document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
var left = 0;


function sliderRight() {
    var line = document.getElementById('line');
    left = left - 321;
    if (left < -1605) {
        left = 0;
    }
    line.style.left = left + 'px';
}


function sliderLeft() {
    left = left + 321;
    if (left > 0) {
        left = -1605;
    }
    line.style.left = left + 'px';
}

