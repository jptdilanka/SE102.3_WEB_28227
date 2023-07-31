var avg; 

function sum() {
    var mark1, mark2, mark3, mark4, mark5;

    mark1 = window.prompt("Enter Mark 1");
    mark2 = window.prompt("Enter Mark 2");
    mark3 = window.prompt("Enter Mark 3");
    mark4 = window.prompt("Enter Mark 4");
    mark5 = window.prompt("Enter Mark 5");

    var tot = parseInt(mark1) + parseInt(mark2) + parseInt(mark3) + parseInt(mark4) + parseInt(mark5);
    avg = tot / 5; 

    document.getElementById("total").innerHTML = "Total: " + tot;
    document.getElementById("average").innerHTML = "Average: " + avg;
}

function grade() {
    if (avg > 30) {
        window.alert("Congrats, You Passed!");
    } else {
        window.alert("Better luck next time...");
    }
}

const calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", () => {
    sum(); 
    grade(); 
});
