// Given a list, build a object data structure
function array_to_list(array) {
    var list = null;

    for (item in array.reverse()) {
        list = {value: array[item], rest: list};
    }

    return list;
}


// Given a list, produce an array
function list_to_array(list) {
    var array = [];

    for (var node = list; node; node = node.rest) {
        array.push(node.value)
    }

    return array;
}


// Takes an element and a list and creates a new list that adds the element to the front of the input list
function prepend(el, list) {
    return {value: el, rest: list};
}


// Takes a list and a number and returns the element at the given position in the list
function nth(list, num) {
    if (num == 0) {
        return list.value;
    } else {
        return nth(list.rest, num - 1);
    }
}



console.log(array_to_list([10, 20, 22])); // {value: 10, rest: {value: 20, rest: null}}
console.log(list_to_array(array_to_list([10, 20, 30]))); // [10, 20, 30]
console.log(prepend(10, prepend(20, null))); // {value: 10, rest: {value: 20, rest: null}}
console.log(nth(array_to_list([10, 20, 30]), 1)); // 20
