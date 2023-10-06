const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input");

form.onsubmit = (e) => {
    e.preventDefault();
}

continueBtn.onclick = () => {
// AJAX AQUI !!
    let xhr = new XMLHttpRequest(); // CRIA OBJETO XML
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                console.log(data);
            }
        }
    }
    // enviar DATA de ajax para php
    let formData = new FormData(form); // cria objeto formData
    xhr.send(formData); //send form
}