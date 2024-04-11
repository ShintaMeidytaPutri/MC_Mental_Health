document.addEventListener("DOMContentLoaded", function() {
    const inputNama = document.getElementById("input-nama").querySelector("input");
    const inputEmail = document.getElementById("input-email").querySelector("input");
    const inputBio = document.getElementById("input-bio").querySelector("input");
    const btnEdit = document.querySelector(".btn-edit");
    const btnSave = document.querySelector(".btn-save");
    inputNama.value = "Ghina Nazira"; 
    inputEmail.value = "ghinan123@gmail.com"; 
    inputBio.value = "Busy"; 
    
    btnEdit.addEventListener("click", function() {
        
        inputNama.removeAttribute("disabled");
        inputEmail.removeAttribute("disabled");
        inputBio.removeAttribute("disabled");
        btnEdit.textContent = "Save Profile";
        btnEdit.removeEventListener("click", editProfile);
        btnEdit.addEventListener("click", saveProfile);
    });

    function saveProfile() {
        const newNama = inputNama.value;
        const newEmail = inputEmail.value;
        const newBio = inputBio.value;
        inputNama.setAttribute("disabled", true);
        inputEmail.setAttribute("disabled", true);
        inputBio.setAttribute("disabled", true);

      
        btnEdit.textContent = "Edit Profile";
        btnEdit.removeEventListener("click", saveProfile);
        btnEdit.addEventListener("click", editProfile);
    }


    function editProfile() {
        inputNama.removeAttribute("disabled");
        inputEmail.removeAttribute("disabled");
        inputBio.removeAttribute("disabled");
        btnEdit.textContent = "Save Profile";
        btnEdit.removeEventListener("click", editProfile);
        btnEdit.addEventListener("click", saveProfile);
    }
    btnSave.addEventListener("click", updateProfile);
    function updateProfile() {
        alert("Profile updated successfully!");
    }
});
