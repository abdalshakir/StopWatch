var min = 0;
var sec = 0;
var milisec = 0;
var minH1 = document.getElementById("min");
var secH1 = document.getElementById("sec");
var milisecH1 = document.getElementById("milisec");
var interval;

function timer() {
    milisec++;
    milisecH1.innerHTML = milisec;
    if (milisec >= 100) {
        sec++;
        secH1.innerHTML = sec;
        milisec = 0;
    } else if (sec >= 60) {
        min++;
        minH1.innerHTML = min;
        sec = 0;
    }
}

function start() {
    if (!interval){
        interval = setInterval(timer, 10);
    }
}

function stop() {
    clearInterval(interval);
    interval = false;
}

function reset() {
    min = 0;
    sec = 0;
    milisec = 0;
    minH1.innerHTML = "0" + min;
    secH1.innerHTML = "0" + sec;
    milisecH1.innerHTML = "0" + milisec;
    clearInterval(interval);
}