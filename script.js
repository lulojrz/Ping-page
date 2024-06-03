const input = document.getElementById("input-form");
const button = document.getElementById("btn-form");
const message = document.getElementById("error-text");
const text = document.getElementById("correct-text");


const regexEmail = /\S+@\S+\.\S+/;

button.addEventListener("click", (e) => {
    e.preventDefault();
    validacion(input);
});

function validacion(input) {
    if (input.value.trim() === "") {
        message.textContent = "Please enter an email address.";
        message.style.display = "block";
    } else if (!regexEmail.test(input.value)) {
        message.textContent = "Error, please provide a valid email address.";
      
        message.style.display = "block";
    } else {
        text.style.display = "block"; 
        message.style.display= "none";
        input.disabled = true;

    }
}
