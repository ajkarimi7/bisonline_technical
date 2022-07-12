var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(100000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const num = document.getElementById('your-number');
const btn = document.getElementById('generate');


btn.addEventListener('click', () => {
    var output, started, duration;

    duration = 1000;

    output = num.innerHTML;

    started = new Date().getTime;


    animationTimer = setInterval(function() {

        if (new Date().getTime - started > duration) {
            clearInterval(animationTimer);
        } else {
            console.log('animating');
            
        }
    }, 100);
    num.innerHTML = `Your Number: ${getRandomInt()}`;

    if (getRandomInt() >= 1 && getRandomInt() <= 1000) {
        alert("Go buy a real lottery ticket!!")
    } else {
        alert("Too bad! You've lost!")
    }
    
    btn.removeClass('active');
    this.addClass('active')
});



