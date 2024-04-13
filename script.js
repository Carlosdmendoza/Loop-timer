function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            // Play a sound
            var audio = document.getElementById("audio");
            audio.play();
        }
    }, 1000);
}

window.onload = function () {
    var twoMinutes = 60 * 0.2,
        display = document.querySelector('#timer');
    startTimer(twoMinutes, display);
};