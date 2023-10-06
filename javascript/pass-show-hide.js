const pwdField = document.querySelector(".form .field input[type='password']"), 
toggleBtn = document.querySelector(".form .field i");

toggleBtn.onclick = () => {
   // pwdField.type == "password" ? pwdField.type = "text" : pwdField.type = "password";

    if(pwdField.type == "password"){
        pwdField.type = "text";
    } else {
        pwdField.type = "password";
        toggleBtn.classList.remove("active");
    }
}