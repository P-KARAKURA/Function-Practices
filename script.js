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

    let time = 10;

    countdown.textContent =
        "YOUR GIFT ON THE WAY IN " + time + " seconds";


    const timer = setInterval(function () {

        time--;

        countdown.textContent =
            "YOUR GIFT ON THE WAY IN " + time + " seconds";


        if (time === 0) {

            clearInterval(timer);

            playCongratulations();

        }

    }, 1000);
}



// FUNCTION 3
// Play the song automatically and display the image

function playCongratulations() {

    music.play();


    countdown.textContent =
        "Enjoy the the Trip we are planning something for you soon!";


    thankYouImage.style.display = "block";
}