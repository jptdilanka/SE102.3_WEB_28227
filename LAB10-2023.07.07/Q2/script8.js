function getYearOfBirthFromNIC(nicNumber) {
    if (nicNumber.length === 10) {
        var birthYearPrefix = nicNumber.substring(0, 2);
        var birthYear = "19" + birthYearPrefix;
        
        return birthYear;
    } else {
        return "Invalid NIC number format!";
    }
}
var nicNumberInput = window.prompt("Enter the NIC number (YYMMDDXXXXV format):");
var yearOfBirth = getYearOfBirthFromNIC(nicNumberInput);
window.alert("Year of Birth: " + yearOfBirth);
