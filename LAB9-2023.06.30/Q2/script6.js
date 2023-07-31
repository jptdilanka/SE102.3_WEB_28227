const googleBtn = document.getElementById("googleBtn");

googleBtn.addEventListener("click", () => {
    // Show the confirm box
    const confirmed = window.confirm("Do you want to visit Google?");

    if (confirmed) {
        window.location.href = "https://www.google.com";
    } else {
        window.alert("You decided to stay.");
    }
});
