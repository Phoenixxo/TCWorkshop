// Fill in for exercises!
let guess
let attempts = 5

const guessNumber = (targetNumber) => {
    while (guess != targetNumber && attempts > 0) {
        guess = prompt("Guess the number: ")

        if (guess > targetNumber) {
            attempts = attempts - 1
            console.log(`attempts left: ${attempts}`);
            console.log("Too high!");
        } else if (guess < targetNumber) {
            attempts = attempts - 1
            console.log(`attempts left: ${attempts}`);
            console.log("Too low!");
        } else {
            console.log("Correct!");
        }

        if (attempts <= 0) {
            console.log("Game over!");
        }
    }
};

guessNumber(30);
