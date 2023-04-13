const btnstart = document.querySelector('btnstart')
const btnstop = document.querySelector('btnstop')
const btnreset = document.querySelector('btnreset')

startBtn.addEventListener("click", startTime);
stopBtn.addEventListener("click", stopTime);
resetBtn.addEventListener("click", resetTime);

function startTimer() {
    btnstart.classList.add("active")
}

function stopTimer() {
    btnstop.classList.add("active")
}

function resetTimer() {
    btnreset.classList.add("active")
}