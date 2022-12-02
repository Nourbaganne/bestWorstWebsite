alert("Hello there!! Welcome to our humble website");
alert("Get ready to see the best of the worst");
alert("it's coming right now");

const spookyBtn = document.getElementById('spookyBtn');
const scaryImg = document.getElementById('scaryImg');
const navBg = document.getElementById('bgColor');

scaryImg.style.visibility = 'hidden';   

var i = 0;
function change() {
    let color = ['red', 'blue', 'green', 'yellow', 'pink', 'orange'];
    let bgColor = ['orange', 'red', 'blue', 'green', 'yellow'];
    if(i == color.length) {
        i = 0
    }
    navBg.style.backgroundColor = bgColor[i];
    spookyBtn.style.backgroundColor = color[i];
    i = i + 1;
}

spookyBtn.addEventListener('click', function() {
    if(scaryImg.style.visibility == 'visible') {
        scaryImg.style.visibility = 'hidden';
    } else {
        scaryImg.style.visibility = 'visible';
    }
})



setInterval(change, 500);
