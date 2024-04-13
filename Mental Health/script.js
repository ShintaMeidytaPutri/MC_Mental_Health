var attempt = 3; 

    function validate() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var alertElement = document.getElementById("alertMessage");
        if (email == "Asikteen@gmail.com" && password == "admin123") {
            //alertElement.innerHTML = "Berhasil Login";//
            //alertElement.style.display = "block";//
            alert("Success Log In!");
            setTimeout(function () {
                window.location = "home.html"; 
            }, 1000); 
            return false;
        } else {
            attempt--; 
            //alertElement.innerHTML = "Kamu punya sisa " + attempt + " kali lagi untuk mencoba Login";
            //alertElement.style.display = "block";

            if (attempt === 0) {
                document.getElementById("email").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("submit").disabled = true;
                return false;
            }
        }
    function logout() {
            window.location = "index.html";
    }
        setTimeout(function () {
            alertElement.style.display = "none";
        }, 9000);
    }