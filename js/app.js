//getting all attribute
const
    form = document.querySelector("form"),
    eInput = form.querySelector(".input"),
    text = form.querySelector(".text");

form.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form from submitting
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //Regex pattern to validate email
    form.classList.add("error");
    form.classList.remove("valid");
    if (eInput.value == "") {
        text.innerText = "Please check your email";
        eInput.setAttribute("style", "border: 1px solid red");
    } else if (!eInput.value.match(pattern)) { //if patter is not matched with user's enter value
        text.innerText = "Please check your email";
        eInput.setAttribute("style", "border: 1px solid red");
    } else {
        form.classList.replace("error", "valid"); //replacing error class with valid class
        text.innerText = "";
        eInput.setAttribute("style", "border: 1px solid black");
    }
});

//getting all attribute
const
    form_2 = document.querySelector(".form-2"),
    input = form_2.querySelector(".input"),
    etext = form_2.querySelector(".etext");

form_2.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form from submitting
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //Regex pattern to validate email
    form_2.classList.add("error");
    form_2.classList.remove("valid");
    if (input.value == "") {
        etext.innerText = "Please check your email";
        input.setAttribute("style", "border: 1px solid red");
    } else if (!input.value.match(pattern)) { //if patter is not matched with user's enter value
        etext.innerText = "Please check your email";
        input.setAttribute("style", "border: 1px solid red");
    } else {
        form_2.classList.replace("error", "valid"); //replacing error class with valid class
        etext.innerText = "";
        input.setAttribute("style", "border: 1px solid none");
    }
});