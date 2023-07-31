function calculateCircleArea() {
    var radiusInput = window.prompt("Enter the radius of the circle:");
    var radius = parseFloat(radiusInput);
    if (isNaN(radius)) {
        window.alert("Invalid input! Please enter a valid number.");
    } else {
        var area = 22/7 * Math.pow(radius, 2);
        window.alert("The area of the circle is: " + area.toFixed(2));
    }
}
calculateCircleArea();
