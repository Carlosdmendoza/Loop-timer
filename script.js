function startTimer() {
    var inputMinutes = parseInt(document.getElementById('minutes').value);
    var inputSeconds = parseInt(document.getElementById('seconds').value);

    if (isNaN(inputMinutes) || isNaN(inputSeconds) || inputMinutes < 0 || inputSeconds < 0 || (inputMinutes === 0 && inputSeconds === 0)) {
        alert("Please enter valid positive numbers for minutes and seconds.");
        return;
    }

    var timer = inputMinutes * 60 + inputSeconds,
        display = document.querySelector('#timer');

    var intervalId = setInterval(function () {
        var minutes = parseInt(timer / 60, 10);
        var seconds = parseInt(timer % 60, 10);

        var displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        var displaySeconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = displayMinutes + ":" + displaySeconds;

        if (--timer < 0) {
            timer = inputMinutes * 60 + inputSeconds;
            // Play a sound
            var audio = document.getElementById("audio");
            audio.play();
        }
    }, 1000);

    // Stop the timer after the specified duration
    setTimeout(function() {
        clearInterval(intervalId);
    }, timer * 1000); // Convert seconds to milliseconds
}
