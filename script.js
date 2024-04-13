function startTimer() {
    var inputMinutes = parseInt(document.getElementById('minutes').value);
    var inputSeconds = parseInt(document.getElementById('seconds').value);

    if (isNaN(inputMinutes) || isNaN(inputSeconds) || inputMinutes < 0 || inputSeconds < 0 || (inputMinutes === 0 && inputSeconds === 0)) {
        alert("Please enter valid positive numbers for minutes and seconds.");
        return;
    }

    var totalSeconds = inputMinutes * 60 + inputSeconds;
    var display = document.querySelector('#timer');

    var intervalId = setInterval(function () {
        var minutes = parseInt(totalSeconds / 60, 10);
        var seconds = parseInt(totalSeconds % 60, 10);

        var displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        var displaySeconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = displayMinutes + ":" + displaySeconds;

        if (--totalSeconds < 0) {
            clearInterval(intervalId);
            totalSeconds = inputMinutes * 60 + inputSeconds;
            // Play a sound
            var audio = document.getElementById("audio");
            audio.play();
            startTimer(); // Start the timer again
        }
    }, 1000);
}
