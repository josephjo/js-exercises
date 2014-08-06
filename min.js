// Function that takes two arguments and returns the minimum value
var min = function(num1, num2) {
    if (num1 > num2) {
        return num2;
    } else {
        return num1
    }
}


console.log(min(0, 10)); // 0
console.log(min(0, -10)); // -10
console.log(min(3, 1)); // 1
