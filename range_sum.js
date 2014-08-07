// Range function that lists numbers from start arg to end arg
function range(start, end) {
    arr = []
    for (var i = start; i <= end; i++) {
        arr.push(i);
    }

    return arr
}


console.log(range(1, 10));
