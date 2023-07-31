function getDayNameFromNumber(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid input! Please enter a number between 1 and 7.";
    }
}

function displayDay() {
    var dayNumberInput = window.prompt("Enter a number from 1 to 7:");
    var dayNumber = parseInt(dayNumberInput);
    var dayName = getDayNameFromNumber(dayNumber);
    window.alert(dayName);
}
displayDay();
