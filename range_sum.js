// Range function that lists numbers from start arg to end arg
function range(start, end, step) {
    var arr = [], counter = 1;

    if (arguments.length === 3) {
        counter = step;
    }

    for (var i = start; i <= end; i += counter) {
        arr.push(i);
    }

    return arr;
}


// Sum function that takes an array of numbers and returns sum
function sum(arr) {
    var total = 0;

    for (var num in arr) {
        total += Number(arr[num]);
    }

    return total;
}



console.log(range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(range(1, 10, 5)); // [1, 6]
console.log(range(5, 2)); // [5, 4, 3, 2]
console.log(sum(range(1, 10))); // 55
console.log(sum(range(1, 10, 2))); // 25
