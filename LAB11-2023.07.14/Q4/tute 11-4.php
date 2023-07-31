<!DOCTYPE html>
<html>
<head>
    <title>Day of the Week</title>
</head>
<body>
    <form method="post">
        <label for="dayNumber">Enter a number from 1 to 7:</label>
        <input type="number" name="dayNumber" id="dayNumber" min="1" max="7" required>
        <input type="submit" value="Show Day">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $dayNumber = $_POST["dayNumber"];
        switch ($dayNumber) {
            case 1:
                $day = "Monday";
                break;
            case 2:
                $day = "Tuesday";
                break;
            case 3:
                $day = "Wednesday";
                break;
            case 4:
                $day = "Thursday";
                break;
            case 5:
                $day = "Friday";
                break;
            case 6:
                $day = "Saturday";
                break;
            case 7:
                $day = "Sunday";
                break;
            default:
                $day = "Invalid number";
                break;
        }
        echo "<p>Day of the Week: " . $day . "</p>";
    }
    ?>
</body>
</html>
