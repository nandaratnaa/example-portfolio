//alert("Hello World");

//selecting html elements
let emailElement = document.querySelector("#email");
let messageElement = document.querySelector("#message");

//attaching click listener
let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
//getting user entered values
    let emailValue = emailElement.value;
    

    //console.log("Email: ", emailValue);
    //console.log("Message: ", messageValue);
//javascript validations
    if(emailValue.includes("@")) {

        alert("email adress is valid")
    } else {
        alert("something went wrong, please enter a valid email address")
    }

    let messageValue = messageElement.value;

    if (messageValue.includes ('crap')) {
        alert("please delete your message")
    } else {
        alert ("thanks for your message")
    }
} )
