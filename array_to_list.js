// Given a list, build a object data structure
var array_to_list = function(array) {
    var list = null;

    for (item in array.reverse()) {
        list = {value: array[item], rest: list};
    }

    return list;
}



console.log(array_to_list([10, 20])); // {value: 10, rest: {value: 20, rest: null}}
