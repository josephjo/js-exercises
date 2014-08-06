// Use modulo to determine if a number is even
function is_even(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Use recursion to determine if a number is even
function is_even_recursion(number) {
    number = -number > 0 ? -number : number; // Make sure we're not working with negative numbers

    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        is_even_recursion(number -= 2);
    }
}


console.log(is_even(50)); // true
console.log(is_even(75)); // false
console.log(is_even(-1)); // false
console.log(is_even_recursion(50)); // true
console.log(is_even_recursion(75)); // false
console.log(is_even_recursion(-1)); // false
