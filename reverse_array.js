// Reverse a given array
function reverse_array(arr) {
    var new_arr = arr.reverse();
    return new_arr;
}


// Reverse a given array
var reverse_array_in_place = function(arr) {
    var new_arr = arr.reverse();
};



console.log(reverse_array(['A', 'B', 'C'])); // ['C', 'B', 'A'];
var array_value = ['A', 'B', 'C'];
reverse_array_in_place(array_value);
console.log(array_value); // ['C', 'B', 'A'];
