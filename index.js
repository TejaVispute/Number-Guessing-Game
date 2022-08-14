// for generating random number
let randomnum = Math.floor(Math.random() * 100);
// user inut value access
// accessed by class for inserting answer and guess

let anstxt = document.querySelector('.answer-text');
let anstxt2 = document.querySelector('.answer-text2');
let anstxt3 = document.querySelector('.answer-text3');

// guess will be substracted with every wrong guess
let guess = 10;

var guessedNum = []; //empty array for storing guessed number

//make a function
function guessfun() {
    let user_inputval = document.querySelector('#input-val').value;

    if (user_inputval < 1 || user_inputval > 100) {
        alert("Please enter value between 1 and 100");

    }

    else {
        guessedNum.push(user_inputval);
        guess = guess - 1;
        if (user_inputval > randomnum) {
            anstxt.textContent = "Oops This is too large try smaller one 😬";
            anstxt2.textContent = "Number of guesses remaining😢: " + guess;
            anstxt3.textContent = "Guessed Numbers Are :" + guessedNum;
            if (guess == 0) {
                document.querySelector(".check").disabled = true;
                anstxt.textContent = "You Don't Have more attempts left Refresh page and try from beginning";
            }

        }
        else if (user_inputval < randomnum) {
            anstxt.textContent = "Opps this is too small Try Larger one 😬";
            anstxt2.textContent = "Number of guesses remaining 😢: " + guess;
            anstxt3.textContent = "Guessed Numbers Are : " + guessedNum;

            if (guess == 0) {
                document.querySelector(".check").disabled = true;
                anstxt.textContent = "You Dont Have more attempts left Refresh page and try from beginning";
            }
        }

        else if (user_inputval == randomnum) {
            anstxt.textContent = "😀❤Excellent Work you have guessed the number :-" + randomnum;
            document.querySelector(".check").disabled = true;
        }
    }

}