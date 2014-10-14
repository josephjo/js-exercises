// When year is inputted, the Chinese Zodiac animal is returned
function zodiac(year) {
    var num = year % 12,
        animal = '';

    switch (num) {
        case 0:
            animal = 'Monkey';
            break;
        case 1:
            animal = 'Rooster';
            break;
        case 2:
            animal = 'Dog';
            break;
        case 3:
            animal = 'Pig';
            break;
        case 4:
            animal = 'Rat';
            break;
        case 5:
            animal = 'Ox';
            break;
        case 6:
            animal = 'Tiger';
            break;
        case 7:
            animal = 'Rabbit';
            break;
        case 8:
            animal = 'Dragon';
            break;
        case 9:
            animal = 'Snake';
            break;
        case 10:
            animal = 'Horse';
            break;
        case 11:
            animal = 'Goat';
            break;
        default:
            animal = 'No animal found';
    }

    console.log(year + ": " + animal);
}


zodiac(1927);
