// Range function that lists numbers from start arg to end arg
function range(start, end) {
    arr = [];
    for (var i = start; i <= end; i++) {
        arr.push(i);
    }

    return arr;
}


// Sum function that takes an array of numbers and returns sum
function sum(arr) {
    var sum = 0;
    console.log(arr);

    for (var num in arr) {
        sum += Number(arr[num]);
    }
    return sum;
}



console.log(range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10))); // 55
