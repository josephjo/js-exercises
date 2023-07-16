// Calculate cost per mile for miles needed for a free flight minus any fees
const calc_air_miles = () => { 
    const format = (num) => Number(num.replace(/[^0-9\.]+/g,""));

    const cost = prompt("Amount you would pay for the flight: $");
    const miles = prompt("Amount of miles it costs: ");
    const fees = prompt("Amount of fees associated with redeeming with miles: $");
    const total = ((format(cost) - format(fees)) / format(miles)) * 100;

    return `You're getting ${total.toFixed(2)} cents per mile for a ${cost} ticket.`;
}

calc_air_miles();
