// Function to get count of a char in a string
function count_char(str, char) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }

    return count;
}

console.log(count_char('krazyklown', 'k')); // 2
console.log(count_char('zzzzzzzzzzzzzzzzzzz', 'a')); // 0
