// Get elements from HTML,

const nameInput = document.getElementById("name");

const signInButton = document.getElementById("signInButton");

const message = document.getElementById("message");

const countdown = document.getElementById("countdown");

const thankYouImage = document.getElementById("thankYouImage");

const music = document.getElementById("music");


// what happens when the button is clicked?

signInButton.addEventListener("click", signIn);


// FUNCTION 1 sign in

function signIn() {

    const name = nameInput.value;


    if (name === "") {

        message.textContent = "Please enter your name.";

        return;
    }


    message.textContent =
        "Congratulations " + name + "! Welcome to HABLOCLASS.";


    startCountdown();
}



// FUNCTION 2
// 10 second countdown timer

function startCountdown() {

    let time = 2;

    countdown.textContent =
        "YOUR GIFT ON THE WAY IN " + time + " steps only!";


    const timer = setInterval(function () {

        time--;

        countdown.textContent =
            "YOUR GIFT ON THE WAY IN " + time + " steps!";


        if (time === 0) {

            console.log("Countdown finished!");

            clearInterval(timer);

            playCongratulations();

        }

    }, 1000);
}



// FUNCTION 3
// Play the song automatically and display the image

function playCongratulations() {

    music.play();

    setTimeout(function () {
        music.pause();
        music.currentTime = 0;
    }, 15000);

     stopButton.style.display = "block";

    countdown.textContent =
        "Enjoy the Trip! We are planning something for you soon!";

    thankYouImage.style.display = "block";
}

stopButton.addEventListener("click", function () {

    music.pause();
    music.currentTime = 0;

    stopButton.style.display = "none";

});