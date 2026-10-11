const startTime = 0.05; // Default time in minutes
let time = startTime * 60;

const alarm = new Audio('resources/audio/alarm.mp3');

const timerEl = document.getElementById("timer")
const playIcon = document.getElementById('playIcon');

let studyTime = 25;
let shortTime = 5;
let longTime = 15;

let intervalId = null;

updateTimeEl();

function timerType(id) {
    clearActiveInterval();
    if (id == "study") {
        time = studyTime * 60;
    } else if (id == "short") {
        time = shortTime * 60;
    } else {
        time = longTime * 60;
    }
    updateTimeEl();
}

function playPause() {
    if (intervalId) {
        clearActiveInterval();
    } else {
        intervalId = setInterval(updateTimer, 1000);
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    }
}

function updateTimer() {
    if (time <= 0) {
        alarm.play();
        clearActiveInterval();
        return;
    }
    time--;
    updateTimeEl();
}

function updateTimeEl() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerEl.innerHTML = `${minutes}:${seconds}`;
}

function clearActiveInterval() {
    clearInterval(intervalId);
    intervalId = null;
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
}