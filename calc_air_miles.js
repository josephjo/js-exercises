// Calculate cost per mile for miles needed for a free flight minus any fees
function calc_air_miles(cost, miles, fees) {
    var total;
    total = ((cost - fees) / miles) * 100;

    return "You're getting " + total.toFixed(2) + " cents per mile for a $" + cost + " ticket.";
}

console.log(calc_air_miles(300, 25000, 20)); // 1.12 cpm
console.log(calc_air_miles(16200, 200000, 300)); // 7.95 cpm
