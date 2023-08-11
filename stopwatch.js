let startbtn = document.querySelector('#startbtn');
let pause = document.querySelector('#pause');
let reset = document.querySelector('#reset');

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingseconds = 0;
let leadingminutes = 0;
let leadinghours = 0;

let timerInterval = null;
let timerStatus = "stopped";

function stopwatch() {
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    leadingseconds = seconds < 10 ? "0" + seconds : seconds;
    leadingminutes = minutes < 10 ? "0" + minutes : minutes;
    leadinghours = hours < 10 ? "0" + hours : hours;

    let displaytimer = document.getElementById('timer').innerText = leadinghours + ":" + leadingminutes + ":" + leadingseconds;
}

startbtn.addEventListener('click', function() {
    if (timerStatus === "stopped") {
        timerInterval = setInterval(stopwatch, 1000);
        timerStatus = "started";
    }
});

pause.addEventListener('click', function() {
    if (timerStatus === "started") {
        clearInterval(timerInterval);
        timerStatus = "paused";
    } else if (timerStatus === "paused") {
        timerInterval = setInterval(stopwatch, 1000);
        timerStatus = "started";
    }
});

reset.addEventListener('click', function() {
    clearInterval(timerInterval);
    timerStatus = "stopped";
    seconds = 0;
    minutes = 0;
    hours = 0;
    leadingseconds = "00";
    leadingminutes = "00";
    leadinghours = "00";
    document.getElementById('timer').innerText = leadinghours + ":" + leadingminutes + ":" + leadingseconds;
});
