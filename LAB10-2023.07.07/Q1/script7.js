function performMathOperation(operator) {
    var num1Input = window.prompt("Enter the first number:");
    var num2Input = window.prompt("Enter the second number:");
    var num1 = parseFloat(num1Input);
    var num2 = parseFloat(num2Input);
    if (isNaN(num1) || isNaN(num2)) {
        window.alert("Invalid input! Please enter valid numbers.");
    } else {
        switch (operator) {
            case "+":
                window.alert("Result: " + (num1 + num2));
                break;
            case "-":
                window.alert("Result: " + (num1 - num2));
                break;
            case "*":
                window.alert("Result: " + (num1 * num2));
                break;
            case "/":
                if (num2 === 0) {
                    window.alert("Division by zero is not allowed!");
                } else {
                    window.alert("Result: " + (num1 / num2));
                }
                break;
            default:
                window.alert("Invalid operator! Please enter a valid operator (+, -, *, /).");
                break;
        }
    }
}
var operator = window.prompt("Enter the math operation (+, -, *, /):");
performMathOperation(operator);
