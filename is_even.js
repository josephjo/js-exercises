// Use modulo to determine if a number is even
function is_even(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


console.log(is_even(50)); // true
console.log(is_even(75)); // false
console.log(is_even(-1)); // false
