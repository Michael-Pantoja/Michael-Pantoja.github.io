var i = 0;
var images = [];
var time = 3000;

images[0] = 'banner.jpg'
images[1] = 'pic02.jpg'
images[2] = 'pic03.jpg'

function changeImg(){
    document.slide.sec = images[i];
    if (i < images.length - 1 ){
        i++
    } else {
        i = 0
    }
    setTimeout('changeImg', time);
}
     
window.onload = changeImg