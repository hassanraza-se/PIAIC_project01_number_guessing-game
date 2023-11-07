#!/usr/bin/env node
import inquirer from 'inquirer';
function retryGuessing() {
    inquirer.prompt({
        name: "retry",
        type: "confirm",
        message: "Want to try again?"
    }).then(({ retry }) => {
        if (retry) {
            guessTheNumber();
        }
    });
}
function guessTheNumber() {
    inquirer.prompt({
        name: "number",
        type: "input",
        message: "Guess the number generated by computer between 0 - 99:"
    }).then(({ number }) => {
        let randNumber = Math.floor(Math.random() * 100);
        if (isNaN(number)) {
            console.error("That's not a valid number.");
            retryGuessing();
        }
        else {
            if (number === randNumber) {
                console.log("Congratulations! You guessed it right.");
            }
            else {
                console.error(`Unfortunately! The number is ${randNumber}`);
                retryGuessing();
            }
        }
    });
}
guessTheNumber();
