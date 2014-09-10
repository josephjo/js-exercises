// Calculate cost per mile for miles needed for a free flight minus any fees
function calc_air_miles() {
    var cost = prompt("Amount you would pay for the flight: $"),
        miles = prompt("Amount of miles it costs: "),
        fees = prompt("Amount of fees associated with redeeming with miles: $"),
        total;

    total = ((cost - fees) / miles) * 100;

    return "You're getting " + total.toFixed(2) + " cents per mile for a $" + cost + " ticket.";
}


console.log(calc_air_miles());
