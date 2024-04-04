document.addEventListener("DOMContentLoaded", function() {
    var signUpButton = document.getElementById("submit");
    signUpButton.addEventListener("click", function() {
        window.location.href = "home.html";
    });
});



document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.getElementById("back");
    backButton.addEventListener("click", function() {
        window.location.href = "signin.html";
    });
});
