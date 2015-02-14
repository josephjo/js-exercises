var number_game = function(num) {
    var real_num = Math.round(Math.random() * num + 1),
        guess = prompt("Guess a number!");

    while(parseInt(guess) !== real_num) {
        if (parseInt(guess) > real_num) {
            guess = prompt("Guess lower.")
        } else if (parseInt(guess) < real_num) {
            guess = prompt("Guess higher.")
        }
    }

    if (parseInt(guess) === real_num) {
        alert("Correct! The number is " + real_num + ".");
    }
}

console.log(number_game());
