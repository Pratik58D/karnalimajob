//Getting Data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#sucess");
const errorNodes = document.querySelector(".error");
const errorEmail = document.querySelector(".Eerror");
const errorMessage= document.querySelector(".Merror")


// Validate data
function validateForm(){
   clearMessages();
   let errorFlag= false ; 
if(nameInput.value.length < 1){
  errorNodes.innerText = "Please enter name";
    nameInput.classList.add("error-border");
    errorFlag= true;
}
if(!emailIsValid(email.value)){
    errorEmail.innerText= "Invalid email address";
    email.classList.add("error-border");
    errorFlag= true;
}
if(message.value.length<1){
    errorMessage.innerText="Please enter Message ";
    message.classList.add("error-border");
    errorFlag= true;

}
if(!errorFlag){
    success.innerText="Sucess!"
}
    
}

//clear error / sucess messages

function clearMessages(){
    for(let i= 0; i< errorNodes.length; i++){
      errorNodes[i].innerText="";
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
    success.innerText="";
    errorNodes.innerText="";
    errorEmail.innerText="";
    errorMessage.innerText="";
    
}

//check if email is valid 
function emailIsValid(email){
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return pattern.test(email);
}
