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


zodiac(1920);
zodiac(1921);
zodiac(1922);
zodiac(1923);
zodiac(1924);
zodiac(1925);
zodiac(1926);
zodiac(1927);
zodiac(1928);
zodiac(1929);
zodiac(1930);
zodiac(1931);
zodiac(1932);
